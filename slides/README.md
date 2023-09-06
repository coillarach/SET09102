# Attention! 

The files in this directory are not meant to be viewed directly.
They are hosted on a web server that is independent of GitHub and are
activated using the embedded links on the relevant notes pages.

# Maintenance

Slides are a set of images in any web-friendly format. There are two common
files, one for the css and one for the javascript. Each set of slides requires

* An HTML shell
* A directory containing the image files

To create a new set of slides

1. Make a copy of an existing HTML shell file.
2. Create the new image directory and upload the images
3. In the shell file, configure the following variables
   * `title`
   * `dir`
   * `images`
4. Set the content of the HTML &lt;title&gt; tag

The `images` array is the list of image filenames in the order in which they 
should appear.
