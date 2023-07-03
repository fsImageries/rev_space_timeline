import { System, SystemConstructor } from "./System";
import { World } from "./World";

export class SystemManager {
  public systems: System[];
  public world: World;

  constructor(world: World) {
    this.systems = [];
    this.world = world;
  }

  public execute(delta: number, time: number) {
    for (let index = 0; index < this.systems.length; index++) {
      const sys = this.systems[index];
      if (sys.enabled) this.executeSystem(sys, delta, time);
    }
  }

  private executeSystem(system: System, delta: number, time: number) {
    const startTime = performance.now();
    system.execute(delta, time);
    system.executeTime = performance.now() - startTime;
  }

  public registerSystem<T extends System>(SystemClass: SystemConstructor<T>) {
    if (this.getSystem(SystemClass) !== undefined) {
      console.warn(`System '${SystemClass.name}' already registered.`);
      return this;
    }

    SystemClass.typeID = crypto.randomUUID();
    const sys = new SystemClass(this.world);
    this.systems.push(sys);
    return this;
  }

  public unregisterSystem<T extends System>(SystemClass: SystemConstructor<T>) {
    const system = this.getSystem(SystemClass);
    if (system === undefined) {
      console.warn(`Can't unregister system '${SystemClass.getName()}'. It doesn't exist.`);
      return this;
    }

    this.systems.splice(this.systems.indexOf(system), 1);
    return this;
  }

  public getSystem<T extends System>(SystemClass: SystemConstructor<T>) {
    return this.systems.find((s) => s instanceof SystemClass);
  }

  public querySysDependencies() {
    this.systems.forEach((s) => s.requery());
  }
}
