# Jack Peters — Engineering Portfolio - jackhpeters.github.io

A static GitHub Pages portfolio. Upload the **contents** of this folder to the root of `jackhpeters/jackhpeters.github.io`. Keep the `projects/` directory and `styles.css` in place.

## Adding a project photo

1. Upload your JPG, PNG, or WebP file into `images/`, for example `images/cnc-mill.jpg`.
2. To add a cover photo on the CNC project page, open `projects/cnc-mill.html` and replace the first `<div class="media-placeholder" style="min-height:350px;margin-bottom:26px">...</div>` block with:

```html
<img class="project-media" src="../images/cnc-mill.jpg" alt="My three-axis CNC mill">
```

3. To replace a gallery placeholder, replace its `<div class="media-placeholder">...</div>` block with an `<img class="project-media" src="../images/your-photo.jpg" alt="Description">` tag.
4. To replace the illustration on the homepage, open `index.html` and find the matching project card. Inside its `<div class="visual">`, replace the SVG and the `photo-note` span with `<img src="images/cnc-mill.jpg" alt="Three-axis CNC mill">`.

## Embedding a video

Upload a video to YouTube (unlisted is fine). In a project page, replace the video placeholder with:

```html
<div class="video-wrap">
  <iframe src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID" title="Project demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
```

## Editing

- Homepage content: `index.html`
- Project details: `projects/*.html`
- Shared project-page styling: `styles.css`
- Resume: replace `resume.pdf`
- To add a project, duplicate a project HTML page, edit it, and add a linked project card to `index.html`.
- To delete a project, delete its project card from `index.html` and optionally delete the matching file in `projects/`.

Commit changes in GitHub; Pages should redeploy automatically.
