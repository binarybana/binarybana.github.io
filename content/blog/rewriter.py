from pathlib import Path
import dateutil.parser

import frontmatter
from frontmatter.default_handlers import TOMLHandler

# Some bash magic: `for x in *.html; do mv $x ${x%.*}.md; done`

curdir = Path(".")
for p in curdir.glob("*.md"):
    print(p)
    with open(p, "r") as f:
        post = frontmatter.load(f)
        post.handler = TOMLHandler()
        try:
            creation_date = dateutil.parser.parse(post["date"])
            post["date"] = creation_date
        except:
            pass
        try:
            updated_date = dateutil.parser.parse(post["updated"])
            post["updated"] = updated_date
        except:
            pass
        txt = frontmatter.dumps(post)
    with open(p, "w") as f:
        f.write(txt)
