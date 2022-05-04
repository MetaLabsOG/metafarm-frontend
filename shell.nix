{ pkgs ? import <nixpkgs> {}
, connector ? "ALGO"
}: with pkgs;

mkShell {
    buildInputs = [
        nodejs-16_x
        yarn
    ];

    shellHook = ''
        export REACH_CONNECTOR_MODE=${connector}-devnet
        export PATH=$PWD/node_modules/.bin:$PATH
    '';
}
