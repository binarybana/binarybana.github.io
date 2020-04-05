+++
title = "Support Vector Machines - An Introduction"
permalink = "/2010/04/support-vector-machines-introduction.html"
date = 2010-04-02T05:05:00Z
updated = "2010-04-02 05:05:27"
categories = [ "introduction", "pattern recognition", "svm",]

[blogger]
siteid = "15125061"
postid = "3986360952574152987"
comments = "4"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
This one goes out to Bryan to explain what a support vector machine is, but first I must cover a little bit of background information first.<br /><br /><span class="Apple-style-span" style="font-size: x-large;">Pattern Recognition</span><br />Let's say that we are a farmer trying to decide if our crops are going to be healthy this season, or ridden with locusts. We know that the chance of locust infection is heavily dependent on a lot of factors such as the length of the winter, the previous harvest size, and the last season's locust amounts. Ideally we would like to feed this data, the 'feature vector', into a black box that would output an accurate prediction for the presence or absence of locusts this year.<br /><br />Being a mathematically trained farmer, we would know that there exists toolsets to do just that, so we would root around in our filing cabinets pulling up data of locust infections from years past and the corresponding weather patterns and harvests to makeup a training data set.<br /><br />Now for a bit of definitions, a&nbsp;classification rule is a mathematical function that takes a set of training data and produces a classifier. A classifier is a function that maps a single feature vector, or sample point, to a label. These labels can be yes/no, locust/no locust, healthy/unhealthy, or even consist of multiple classes.<br /><br />As a farmer, we will take our training data, use a classification rule in order to produce a classifier, and then input this year's parameters into the classifier in order to obtain a prediction for this years locust population. <br /><br />Now, a small aside, why do we even bother with this in the first place? Usually the need to automate this process of prediction comes down to speed and complexity. For instance, in a factory where we want to separate tuna from&nbsp;sea bass we&nbsp;may want to classify several hundred fish per second. Or more often the case, the predictions are done in such highly complex scenarios that humans cannot easily handle them intuitively (can you visualize hundred dimensional spaces?).<br /><br />Which classification rule (thus classifier) we use is a complicated issue, but today we'll talk about support vector machines (SVMs).<br /><br /><span class="Apple-style-span" style="font-size: x-large;">Support Vector Machines</span><br />The essence of SVMs is simple, take the training data, and divide the data into two (for a two class classifier) using a straight line. Or in three dimensions, use a plane, and anything higher, use a hyper plane. The math works out the same, but it is easier to visualize in the 2D line case.<br /><br />How do we determine where to draw the line? Simply pick the line that creates the largest gap (or margin) between the closest set of opposing points. This can be formalized into an optimization problem, which I won't get into how to solve here, and the resulting hyperplane is used as our classifier. To do so, we simply take the current data point (this year's data) and see if it is on the locust or non-locust side of the (hyper)plane. See the image to the right (credit to Wikimedia) for a nice visual.<br /><div class="separator" style="clear: both; text-align: center;"><a href="http://upload.wikimedia.org/wikipedia/commons/2/2a/Svm_max_sep_hyperplane_with_margin.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="320" src="http://upload.wikimedia.org/wikipedia/commons/2/2a/Svm_max_sep_hyperplane_with_margin.png" width="296" /></a></div><br />Now what if the data overlaps? Then we have to move to nonlinear kernel based SVMs where we map our 'low' dimensional data into a higher dimensional space using a fancy kernel function and try to separate it there.<br /><br />There are many technicalities and finer points here, but that is the essence of what SVM does.<br /><br />Note to Bryan, Kevin, and Hope: Now, for hyperspectral imaging, each pixel of a hyperspectral image &nbsp;contains hundreds of values, one for each frequency band, and these are usually taken far enough away from the object of interest, that each pixel represents the combination of several signatures (or endmembers). Thus, an image might be 5 meter resolution and contain the signature for both soil and corn crop, and we wish to extract each of those endmembers from the several hundred values in the pixel. Using SVM to accomplish this leads to SVM endmember extraction. :)
</div>
<div class="css-full-comments-content js-full-comments-content">
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/02208329415476352802">
  <div class="css-comment-name js-comment-name">
    happyname34
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2010-04-02T23:45:59.213Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Teach more please good sir, with supporting python code pleeze :D
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/04895830617798093093">
  <div class="css-comment-name js-comment-name">
    Mark
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2010-04-03T00:12:42.382Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Its a shame that your comment page links to the external blogger.com. Can you set up the blog so that comments are either in-line or in-domain?
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
    2010-04-03T01:00:25.280Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Yes it would be nice if it was just a little ajax popup, or somesuch. I enabled openid auth, but there&#39;s not much more flexibility than that.
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
    2010-04-03T01:51:26.693Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Jason: thank you for your comment good sir :). Hahah I should have thought about a python example, it actually wouldn&#39;t be too hard... although I haven&#39;t used any of the optimization toolkits in python yet. (hmmmmm.... :-D)
  </div>
  <br/>
</div>
</div>