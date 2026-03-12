from PIL import Image

input_path = "Logo.mp4_snapshot_00.01.069.jpg"

sizes = {
    "800x480": (800,480),
    "1024x600": (1024,600),
    "1280x720": (1280,720),
    "1920x1080": (1920,1080)
}

img = Image.open(input_path).convert("RGBA")

for name, size in sizes.items():
    canvas = Image.new("RGBA", size, (0,0,0,255))
    logo = img.copy()
    logo.thumbnail(size)

    x = (size[0]-logo.width)//2
    y = (size[1]-logo.height)//2

    canvas.paste(logo,(x,y),logo)

    path = f"carnavi_logo_{name}.png"
    canvas.save(path)

print("Logos created successfully!")