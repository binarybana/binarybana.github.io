+++
title = "Faster Compression"
permalink = "/2013/01/faster-compression.html"
date = 2013-01-18T20:45:00Z
updated = 2013-01-26T02:25:25
categories = [ "linux", "parallelism", "command line", "utilities", "compression",]

[blogger]
siteid = "15125061"
postid = "604010176897154309"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
<i>Reader Warning: If you are not familiar with the linux command line, you best turn back now and try coming back later for other, less technical posts. :)</i><br /><br />So I was getting tired of waiting for next generation sequencing files (6 - 40GB uncompressed) to compress and decompress, so I decided to speed things up a bit while feeding my 11 idle cores more evenly.<br /><br />I found <a href="http://zlib.net/pigz/" target="_blank">pigz</a> (prounceced <i>pig-zee</i>) and <a href="https://github.com/kjn/lbzip2" target="_blank">lbzip2</a> that are gzip and bzip2 compatible linux utilities that are specifically designed to utilize multiple cores. To figure out the relative merits of these against their single core predecessors, I decided to have a little bit of fun. Here are a set of timings I developed on a small test file (with real ASCII sequence data):<br /><br /><script src="https://gist.github.com/4568246.js"></script><br />In summary I am extremely impressed at the boost that a single letter (and 11 idle cores) can give to compression speed. Also, with lbzip2 fully accelerating both compression and decompression (unlike pigz) it makes the bzip2 format not only feasible, but completely logical!<br /><br />Also another benefit to using bz2 over gz is the ability to quickly index in to these files with random seeks as explained at this <a href="http://blastedbio.blogspot.com/2011/11/random-access-to-bzip2.html" target="_blank">nice blog post</a>.<br /><br />Caveat: the example command given for measurement is written for the zsh shell.<br /><br />Also, if you'd like to comment, please do so on my G+ post <a href="https://plus.google.com/u/0/102340116383554399495/posts/SfS8MR1NLMU" target="_blank">here</a>.
</div>