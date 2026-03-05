# Fontes

## Rolide
Para usar a fonte **Rolide** na seção "Projeto de Interiores", baixe em um dos sites:
- https://www.fontspace.com/rolide-font-f107086
- https://befonts.com/rolide-font.html

Coloque um dos arquivos na pasta `public/fonts`:
- `Rolide.woff2`, ou
- `Rolide.woff`, ou
- `Rolide.ttf`

O CSS já está configurado para carregar automaticamente quando o arquivo existir.

## Halyard Text
A fonte **Halyard Text** (texto ao lado dos retângulos) é comercial (Darden Studio / Adobe Fonts). Enquanto não for adicionada, o projeto usa **Source Serif 4** como fallback. Se você tiver os arquivos da Halyard Text, adicione um `@font-face` em `src/index.css` apontando para eles e o Tailwind já usa a classe `font-halyard`.
