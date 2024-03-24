type Point = {
    x: number,
    y: number
}
let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function walk(maze: string[], wall: String, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // are we of the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false;
    }
    // is it a wall
    if(maze[curr.y][curr.x] === wall) {
        return false;
    }
    // do we found the end
    if(curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }
    // have we already seen it
    if(seen[curr.y][curr.x]) {
        return false;
    }
    seen[curr.y][curr.x] = true;
    path.push(curr);

    for(let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if(walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;

}
function solve(maze: string[], wall: String, start: Point, end: Point, ): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);

    return path;
}
const maze = [
    'xxxxx x',
    'x   x x',
    'x     x',
    'x xxxxx'
]
const path = solve(maze, 'x', {x: 5, y: 0}, {x: 1, y: 3});
console.log(path);