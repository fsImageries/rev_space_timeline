import SpriteText from 'three-spritetext';

export default function build(message: string, radius: number = 1) {
    const sprite = new SpriteText(message, 100);
    sprite.position.set(0, radius * 2, 0)
    return sprite;
}