# Images Folder

Place your custom images here:

## Recommended Images:
- `hero-bg.jpg` - Hero section background (1920x1080px)
- `about.jpg` - About section image (1200x800px)
- `room-2-sharing.jpg` - 2-sharing room photo
- `room-3-sharing.jpg` - 3-sharing room photo
- `room-4-sharing.jpg` - 4-sharing room photo
- `common-area.jpg` - Common area/recreational space
- `study-room.jpg` - Study room/library
- `dining.jpg` - Dining area
- `exterior.jpg` - Building exterior

## Image Optimization Tips:
- Use WebP format for better performance
- Compress images before uploading
- Recommended max size: 1920px width
- Use descriptive filenames

## Current Setup:
The website currently uses Unsplash images as placeholders. Replace them with your actual hostel photos by:

1. Add images to this folder
2. Update component imports to use local images:
   ```tsx
   import Image from 'next/image'
   import heroImage from '@/public/images/hero-bg.jpg'
   
   <Image src={heroImage} alt="Rahi Homes" />
   ```
