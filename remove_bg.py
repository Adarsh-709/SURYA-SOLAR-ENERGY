from PIL import Image

# Open the image
img = Image.open('public/imgs/pure_black_bg_logo.jpg').convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    r, g, b, a = item
    # Use the max color value as the alpha channel for a smooth glow transition
    alpha = max(r, g, b)
    newData.append((r, g, b, alpha))

img.putdata(newData)
img.save('public/imgs/transparent_creative_logo.png', "PNG")
print("Successfully created transparent_creative_logo.png")
