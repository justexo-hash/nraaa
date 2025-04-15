# Yukon Lab - Setup Instructions

## Prerequisites
- Node.js 18.17 or later
- npm 9.0.0 or later

## Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   To run the development server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 in your browser.

3. **Building for Production**
   ```bash
   npm run build
   npm start
   ```

## Troubleshooting

### Error about "use client" directive
If you see an error like:
```
Error: You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
```

Make sure all components using React hooks or client-side features have "use client" at the top of the file:

```tsx
"use client";

import React, { useState } from 'react';
// rest of the component
```

### Image Placeholders
The site currently uses gray boxes as placeholders. To add real images:
1. Add image files to `public/images/` directory
2. Update image references in components

### Component Structure
- `src/components/` - Reusable UI components
- `src/app/` - Page components following Next.js App Router conventions
- `src/styles/` - Global styles including Tailwind configuration

## Adding New Pages
To add a new page:
1. Create a new directory in `src/app/` for your route
2. Add a `page.tsx` file in that directory
3. Start with the "use client" directive
4. Create your page component

For more information, refer to [Next.js Documentation](https://nextjs.org/docs) 