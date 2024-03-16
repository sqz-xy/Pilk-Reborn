#version 330 core

in vec2 oTexCoords;
in vec3 oFragPos;

out vec4 FragColor;

uniform vec4 uColour;
uniform sampler2D uDiffuse;
uniform float uTime;

uniform vec2 uSpriteSheetSize;
uniform vec2 uSpriteSize;
uniform int uPanelIndex;

void main()
{
// TEMP SOLUTION FOR PROOF OF CONCEPT
    vec2 SpriteSize = vec2(64, 64);
    vec2 SpriteSheetSize = vec2(384, 64);
    int index = 0;

    float w = SpriteSheetSize.x;
    float h = SpriteSheetSize.y;
    // Normalize sprite size (0.0-1.0)
    float dx = SpriteSize.x / w;
    float dy = SpriteSize.y / h;
    // Figure out number of tile cols of sprite sheet
    float cols = w / SpriteSize.x;
    // From linear index to row/col pair
    float col = mod(uPanelIndex, cols);
    float row = floor(uPanelIndex / cols);
    // Finally to UV texture coordinates
    vec2 uv = vec2(dx * oTexCoords.x + col * dx, 1.0 - dy - row * dy + dy * oTexCoords.y);

    vec4 texel = texture(uDiffuse, uv);

    if (texel.a < 0.5)
        discard;

    FragColor = texel;
} 