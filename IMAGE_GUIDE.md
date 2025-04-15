# Adding Images to Yukon Lab Website

## Step 1: Add Images to the `/public/images` Folder

1. Navigate to the `public/images` folder in your project
2. Drag and drop your .png, .jpg, or .webp image files into this folder
3. For best results, use images with the recommended dimensions listed in the README.md

## Step 2: Enable Image Components in the Code

After adding your images, go to each page file and uncomment the Image components:

1. Find code blocks that look like this:
```jsx
{/* Uncomment when you add your image */}
{/* 
<Image 
  src="/images/image-name.jpg"
  alt="Description of image" 
  width={500} 
  height={500}
  className="..."
/>
*/}
```

2. Remove the comment markers to make it look like this:
```jsx
<Image 
  src="/images/image-name.jpg"
  alt="Description of image" 
  width={500} 
  height={500}
  className="..."
/>
```

3. Update the `src` attribute to match your actual image filename

## Step 3: Check and Adjust

1. Run the site locally with `npm run dev`
2. If images look distorted, you may need to adjust the width/height values or CSS classes
3. For background images, make sure they're the right size for good performance

## Key Image Files to Add

### Home & About Pages
- **Main Hero Background**: Large, dramatic image of Shadow (1920x1080px)
- **Shadow Main Image**: Close-up or profile of Shadow (800x800px)
- **Team Member Photos**: Professional headshots (400x500px) 
- **News Images**: Relevant imagery for news items (600x400px)
- **Lab/Facility Images**: Photos of laboratories and equipment (1200x800px)

### Research Page
- **Genetic Reconstruction**: Image showing DNA analysis (600x400px)
- **Cloning Technology**: Image of advanced laboratory equipment (600x400px)
- **Genetic Restoration**: Visual of genetic diversity concept (600x400px)
- **GeneRevive Platform**: High-tech laboratory equipment (600x500px)
- **BioMatrix Womb**: Artificial womb technology (600x500px)
- **EpiGen Controller**: Advanced monitoring equipment (600x500px)

### Species Page
- **Shadow Featured**: Large heroic image of Shadow (600x600px) 
- **Woolly Rhino**: Artist's impression of the woolly rhinoceros (600x400px)
- **Tasmanian Tiger**: Historical or reconstructed image (600x400px)
- **Passenger Pigeon**: Historical photograph or illustration (600x400px)
- **Future Species**: Thumbnail images of candidate species (112x112px each):
  - Woolly Mammoth
  - Dodo Bird
  - Irish Elk
  - Short-faced Bear

## Troubleshooting

- **Images not showing**: Check file paths and make sure you've removed comment markers
- **Images look stretched**: Adjust the CSS or use a different aspect ratio
- **Large file sizes**: Compress your images before adding them to the project 