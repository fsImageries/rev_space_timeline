from subprocess import run
from pathlib import Path

cwd = Path(__file__).parent

def remove_branch_cmd(branch:str, force=False):
    run(["git", "branch", "-d" if not force else "-D", branch], cwd=cwd)

def remove_feature_branches(force=False, repr=False):
    output = run(["git", "branch", "--list", "feature/*"], cwd=cwd, capture_output=True)
    output = output.stdout.decode(encoding="utf-8")

    branches = [s.strip() for s in output.split("\n") if s]
    for branch in branches:
        if repr:
            print(branch)
        else:
            remove_branch_cmd(branch, force)

if __name__ == "__main__":
    remove_feature_branches(repr=True)
