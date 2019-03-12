# D3pg

Originally a D3.js playground using javascript, but now just an experiment in
drawing directed graphs, rendering data over them using good old SVG namespace. Expect a lot of undocumented
kode.

## Usage

`app.component.ts` denotes how links between nodes are created. Right now,
regular nodes depend on D3's interfaces. Same with links, as they show good
practices while rendering nodes. Since initial link creation between nodes
is done only once, it does not matter if it's slow. In addition,
it's expected that they will only be hidden if their "weight"
becomes zero. As a result, there eventually will be a service which 
"knows" about all nodes and links in the module.

All in all, you can run the application by using angular cli's `serve` command.

## Testing

I have no clue how to test this shit. Any help is appreciated.
