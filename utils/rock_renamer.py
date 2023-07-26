from pathlib import Path
from os import environ

tests = [("obj", "suffix"), ("normal", "stem"), ("color", "stem"), ("roughness", "stem")]

def rename_items(path:Path):
    for item in path.iterdir():
        if "obj" in item.suffix.lower() and item.name.lower() != "mesh.obj":
            item.rename(item.with_stem("mesh"))

        if "normal" in item.stem.lower() and item.stem.lower() != "normal":
            item.rename(item.with_stem("normal"))

        if "color" in item.stem.lower() and item.stem.lower() != "color":
            item.rename(item.with_stem("color"))

        if "roughness" in item.stem.lower() and item.stem.lower() != "roughness":
            item.rename(item.with_stem("roughness"))

        if "heights" in item.stem.lower() and item.stem.lower() != "heights":
            item.rename(item.with_stem("heights"))

    print(f"Done: {path}")

        



if __name__ == "__main__":
    paths = [
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 08 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 09 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 10 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 11 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 12 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 13 sketchfab',
        rf'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks\\moss rock 14 sketchfab'
    ]

    for p in paths:
        p = Path(p)
        rename_items(p)