import frontmatter
from frontmatter.default_handlers import TOMLHandler

from pathlib import Path

# for p in p.glob('*.md'):
#     if p
with open("2010-08-17-Why-Curing-Cancer-is-Hard.html") as f:
    post = frontmatter.load(f)
    # print(post.keys())
    # print(post)

    post.handler = TOMLHandler()
    print(frontmatter.dumps(post))
