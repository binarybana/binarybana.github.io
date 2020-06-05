+++
title = "Optimizing Python + Numpy Code"
permalink = "/2010/04/optimizing-python-numpy-code.html"
date = 2010-04-05T02:48:00Z
updated = 2010-04-05T02:48:12

[blogger]
siteid = "15125061"
postid = "1347816994073497989"
comments = "1"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
So I decided to learn Cython, and in doing so, I found an interesting post<a href="http://timwang.posterous.com/matlab-faster-than-python-numpy"> comparing Matlab speed to Numpy + Python and Numpy + Cython</a>. Obviously I was intrigued, and with the available code, pasted into vim I was off and running!<br /><br />The first thing to do is the first step in ALL optimization workflows: profiling! Using the wonderful cProfile.run('GMMGaussianMC(100000)','prof.dat') we can glean the following: <a href="http://pastebin.com/hdStTWnH">(output pasted here for readability).</a><br /><br /><ul><li>Hmmm.. 32 seconds (out of 60) in numpy.linalg.solve</li><li>Only 10 seconds is spent 'in'&nbsp;GMMGaussian (and 3 in GMMGaussianMC), so the bulk is in Numpy</li></ul><div>This explains why Tim's Cython conversion did not net any gain (it's all numpy bound). Thus while chewing on the numpy problem, I started implementing some simple (but in retrospect, probably minor) common python + numpy optimizations: vectorizing code by pulling it out of the inner for loop. And inlining the function call (I'd be curious to see how much this helped, as it is a rather ugly change in general).&nbsp;</div><div><br /></div><div>This took us down from 30 seconds to about 22 seconds, not bad, but not great either.</div><div><br /></div><div>Now, for the linear algebra. It appears that a great deal of our time is spent in the numpy.linalg.solve function, why is this? And after a bit of searching I found <a href="http://mail.scipy.org/pipermail/scipy-user/2009-January/019323.html">this insightful mailing list post</a> (see towards the bottom). It appears that MATLAB does a lot of heuristics in order to use the most efficient way of solving a linear system, whereas numpy takes the easy out approach by calling the generic LAPACK solver (DGESV for anyone interested). After rejecting the idea of compiling a faster LAPACK because it would require rebuilding Numpy, I decided to look more closely at the linear algebra at use in the code.</div><div><br /></div><div>Sure enough, I found that we were dealing with purely diagonal matrices which makes the prospect of simply inverting and multiplying possible.<b> BAM!!! This takes us down to <u>8 seconds,</u> which is comparable to the MATLAB script</b>.</div><div><br /></div><div><a href="http://profiling%20now/">Profiling now</a> we can see that everything is either in the GMMGaussianMC function, or quick numpy functions like randn, dot, inner, etc... There is not much we can do about this to my knowledge, so we are now done!<a href="http://pastebin.com/FLB43tT6"> (link to final code)</a></div><div><br /></div><div>Now time to go learn about the theory behind this algorithm...&nbsp;</div><div><br /></div><div>P.S. Sorry about the poor writing quality in this post, I'm trying to talk and write at the same time, and the result is a poor mess of both :)</div>
</div>
<div class="css-full-comments-content js-full-comments-content">
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/07430958614462140774">
  <div class="css-comment-name js-comment-name">
    endres
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2010-11-24T10:38:21.897Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Interesting, thanks. So in conclusion I understand that Mathoworks put a lot of work into optimization of Matlab (i.e. the heuristics), but with some (or in some cases a lot of) work of your own you can do similar optimizations, e.g. by implementing your own (in the above case trivial) matrix inversion or using the appropriate LAPACK routines by wrapping low level code.
  </div>
  <br/>
</div>
</div>