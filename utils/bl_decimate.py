from os import environ, walk, path
from pathlib import Path
from pprint import pprint

import bpy


P = f'{environ["PROJS"]}\\rev_space_timeline\\public\\rocks'
NUM_ITERS=2
DECIMATE_RATIO=0.01
MODIFIER_NAME='DecimateMod'


def _next(gen):
    try:
        return next(gen)
    except StopIteration:
        return None    


def import_mesh(path):
    bpy.ops.import_scene.obj(filepath=str(path))
    obj = bpy.context.selected_objects[0] ####<--Fix
    bpy.ops.object.origin_set(type='GEOMETRY_ORIGIN', center='MEDIAN')
    return obj


def setup_modifiers(obj):
    modifier=obj.modifiers.new(MODIFIER_NAME,'DECIMATE')
    modifier.ratio=DECIMATE_RATIO
    modifier.use_collapse_triangulate=True
    

def export_mesh(obj:bpy.types.Object, f:Path):
    obj.select_set(True)
    f = f.with_stem(f"decimated_{DECIMATE_RATIO}")
    bpy.ops.export_scene.obj(filepath=str(f), use_selection=True)


def main():
    files = [Path(path.join(r, file)) for r,_,f in walk(P) if (file := _next(x for x in f if ".obj" in x)) is not None]
    for file in files:
        obj = import_mesh(file)
        print("Import done")
        setup_modifiers(obj)
        print("Decimate done")
        export_mesh(obj, file)
        print("Export done")
        

    
if __name__ == "__main__":
    main()
    