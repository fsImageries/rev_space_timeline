from pprint import pprint
import argparse
import subprocess
import re
import os
import json


def parse_args():
    parser = argparse.ArgumentParser(description='Project versioning (because I can)')

    parser.add_argument('-s', "--set", type=str, help='A complete version string in this format <x.y.z-build>')
    parser.add_argument("-cin", "--commit-inc", type=str, 
                        help="Commit increment Message- the commit message, increments version after commit")
    parser.add_argument("-rdt", "--revert-del-tag", action="store_true", 
                        help="Revert the current commit and delete it's tag")
    parser.add_argument("-opr", "--on-pr", nargs='+', default=[], help="Enter the current version and the branch")

    args = parser.parse_args()
    return args


# git/hub commands

def run_std_command(cmd:str|list[str], split=True):
    if isinstance(cmd, str) and split:
        cmd = cmd.split(" ")
    # print(cmd)
    return subprocess.run(cmd, capture_output=True, text=True)

def get_head_sha():
    return run_std_command("git rev-parse HEAD")

def get_prev_sha():
    return run_std_command("git rev-parse HEAD^1")

def get_head_tag():
    return run_std_command("git tag --points-at HEAD")

def get_commit_tag(sha:str):
    return run_std_command(f"git describe --tags {sha}")

def get_head_branch_name():
    return run_std_command("git rev-parse --abbrev-ref HEAD")

def do_commit(msg:str):
    return run_std_command(["git", "commit", "-m", msg])

def do_tag_a_commit(tag:str, commit_sha: str):
    return run_std_command(rf'git tag {tag} {commit_sha}')

def do_revert_cur_commit():
    return run_std_command("git reset HEAD^")

def do_delete_tag(v:str):
    return run_std_command(f"git tag -d {v}")

def do_stage_file(path:str):
    return run_std_command(["git", "add", path])

def set_gh_output(k, v):
    s = f"::set-output name={k}::{v}"
    print("Set output:", s)
    print(s)


# version functions

def parse_version(v:str):
    # TODO try-catch
    res = re.search("(\d+)\.(\d+)\.(\d+)-(\w+.)", v)
    res = res.groups()
    nums = [int(m) for m in res[:3]]
    return (nums, res[-1])
    

idx_map = {
    "m": 0,
    "mi": 1,
    "f": 2
}

def increment_version(v:str, mode:str):
    (nums, build) = parse_version(v)
    mode = mode.lower()
    nums[idx_map[mode]] += 1
    return f"{nums[0]}.{nums[1]}.{nums[2]}-{build}"

def update_build(v:str, build:str):
    nums = v.split("-")[0]
    return f"{nums}-{build}"

def increment_by_branch(v:str, branch:str):
    if branch == "main":
        v = increment_version(v, "m")
    elif branch == "dev":
        v = increment_version(v, "mi")
    else:
        v = increment_version(v, "f")
    
    return v


# automation functions

PACKAGE_JSON = f"{os.environ['PROJS']}\\rev_space_timeline\\package.json"


def increment_on_pr(v:str, target_branch):
    v = increment_by_branch(v, target_branch)
    set_gh_output("version", v)

def revert_current_commit_and_version():
    v = get_head_tag().stdout.strip()
    do_delete_tag(v)
    print("[LOG] Deleting tag successful")
    do_revert_cur_commit()
    print("[LOG] Reverting commit successful")

def get_version_from_json() -> str:
    with open(PACKAGE_JSON, "r+", encoding='utf-8') as f:
        data = json.load(f)
        return data["version"]

def set_version_to_json(v:str):
    with open(PACKAGE_JSON, "r+", encoding='utf-8') as f:
        data = json.load(f)
        data["version"] = v
        f.seek(0)        # <--- should reset file position to the beginning.
        json.dump(data, f, indent=4)
        f.truncate() 

def inrement_after_commit(commit_msg:str):
    branch = get_head_branch_name().stdout.strip()
    old_v = get_version_from_json()
    new_v = increment_by_branch(old_v, branch)
    log = f"[LOG] {branch}\n[LOG] {old_v} -> {new_v}"
    print(log)

    set_version_to_json(new_v)
    print("[LOG] Version set successful")

    do_stage_file(PACKAGE_JSON)
    print("[LOG] package.json staged successful")
    
    resp = do_commit(commit_msg)
    if resp.returncode != 0: 
        print("[ERROR] Commit failed.")
        print(resp.stderr)
        return
    print("[LOG] Commit successful")
    # TODO revert on error


if __name__ == "__main__":
    args = parse_args()
    
    if args.on_pr:
        [v, branch] = args.on_pr
        increment_on_pr(v, branch)

    if args.commit_inc:
        msg = args.commit_inc
        inrement_after_commit(args.commit_inc)
    
    if args.revert_del_tag:
        revert_current_commit_and_version()