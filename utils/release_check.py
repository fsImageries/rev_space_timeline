from pathlib import Path

PROJ = Path(__file__).parent.parent
PAT = 'await world.lvlManager.openLevel'

def check_for_cosmicmap():
    path = PROJ / "src/app.ts"
    with open(path) as f:
        lines = f.readlines()

    lines = [l for l in lines if PAT in l]
    cosmicmap = next(l for l in lines if "Cosmic Map" in l)
    
    if "//" in cosmicmap:
        raise Exception("Cosmic Map is commented out in app.ts!")





if __name__ == "__main__":
    assert PROJ.name == "rev_space_timeline", "Can't find project directory"
    check_for_cosmicmap()
    