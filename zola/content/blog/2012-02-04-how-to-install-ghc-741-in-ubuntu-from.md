+++
title = "How to install GHC 7.4.1 and friends in Ubuntu from source"
permalink = "/2012/02/how-to-install-ghc-741-in-ubuntu-from.html"
date = 2012-02-04T05:09:00Z
updated = "2012-02-05 02:31:09"

[blogger]
siteid = "15125061"
postid = "4487322820266574399"
comments = "4"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
If you'd like to install the newest version of the Glorious Haskell Compiler, you can either wait for the Haskell Platform to come out later in the Spring or for the adventurous you can pull all the pieces together yourself.<br /><br />I first attempted installing GHC 7.4.1 from the prebuilt x86_64 binaries provided from haskell.org/ghc but they are <a href="http://hackage.haskell.org/trac/ghc/ticket/5447">linked against an old version of libgmp</a>, and rather than try any ugly symlink hacks*, I decided to try compiling from source, which I've wanted to do for a while anyways. Luckily the process is quite simple due to the miraculous work put into the build system.<br /><br />I like to install everything locally in my $HOME/src/ghc so that it is easy to remove everything later on down the line, but pick your own poison. Also, it is necessary to use cabal-install from darcs HEAD because the current stable version on Hackage is not updated for GHC 7.4.1. You will need &gt; 3GB free space for this process and a healthy amount of RAM.<br /><br /><script src="https://gist.github.com/1735487.js?file=ghc-install-ubuntu-src.sh"></script> And you're off to the races!<br /><br /><b>Update 2</b>: As <a href="http://www.reddit.com/r/haskell/comments/pabfi/cant_wait_for_the_haskell_platform_compiling_ghc/c3nv4p0">hvr_ pointed out</a> in the reddit comments, it is possible to get around the libgmp easily with a <br /><pre>sudo aptitude install libgmp3c2</pre>to avoid recompiling GHC yourself. So you can go that route as well but you'll still need the latest cabal-install.<br /><br /><b>Update 3: </b>To avoid much pain later on when trying to build profiling libraries with cabal-install, I have added the step of exporting the EXTRA_CONFIGURE_OPTS variable on line 19 before running bootstrap to generate those initial profiling libraries as well.
</div>
<div class="css-full-comments-content js-full-comments-content">
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/18310180570057447651">
  <div class="css-comment-name js-comment-name">
    Prabhat
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-02-04T12:46:20.335Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Are you not missing ./boot ?
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/00649400936159605312">
  <div class="css-comment-name js-comment-name">
    Jason Knight
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-02-04T14:45:29.758Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    I believe ./boot is only required after pulling GHC source from Git. It has already been done for the source tarball on the GHC download page.<br /><br />http://hackage.haskell.org/trac/ghc/wiki/Building/QuickStart
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/18310180570057447651">
  <div class="css-comment-name js-comment-name">
    Prabhat
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-02-04T14:58:56.119Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    True. I did not realise that.
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/06191672696732639582">
  <div class="css-comment-name js-comment-name">
    Eric
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-02-22T19:53:12.017Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    This comment has been removed by the author.
  </div>
  <br/>
</div>
</div>