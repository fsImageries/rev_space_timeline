#!/usr/bin/env python3

from pathlib import Path
from os import environ
from multiprocessing import Pool
from PIL import Image


def convert_2_webp(args:tuple[Path, Path|None]):
    og, new = args
    if new is None:
        new = og.with_suffix(".webp")
    
    img = Image.open(og)
    img.save(new, format="webp")


def scale(og:Path, new:Path, size=(2048, 1024), form="webp"):
    img = Image.open(og)
    img.thumbnail(size, Image.Resampling.LANCZOS)
    img.save(new, format=form)
    

extensions = ("png", "jpg", "jpeg")
def main(path:Path):
    output = path / "webp/converted"
    output.mkdir(exist_ok=True, parents=True)

    og_paths = [p for p in path.rglob("*") if p.suffix.lower().replace(".","") in extensions]
    new_paths = [output / p.with_suffix(".webp").name for p in og_paths]

    p = Pool()
    p.map(convert_2_webp, zip(og_paths, new_paths))

    print("[LOG] Done")



if __name__ == "__main__":
    P = Path(f"{environ['PROJS']}/rev_space_timeline/public")
    # main(P)

    plutoCol = P / "planetTextures/4k_PlutoColour.webp"
    plutoNorm = P / "planetTextures/4k_PlutoColour_normal.jpg"

    output = P / "webp/converted"
    plutoColNew = output / "2k_PlutoColour.webp"
    plutoNormNew = output / "2k_PlutoColour_normal.webp"
    scale(plutoCol, plutoColNew)
    scale(plutoNorm, plutoNormNew)