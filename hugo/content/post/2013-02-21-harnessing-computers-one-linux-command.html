---
title: "Harnessing Computers - One (Linux command line) step at a time"
permalink: "/2013/02/harnessing-computers-one-linux-command.html"
date: "2013-02-21T17:24:00.001Z"
updated: "2013-02-21 17:24:33"
description: 
blogger:
    siteid: "15125061"
    postid: "4222101928924820470"
    comments: "0"
categories: 
author: 
    name: "Jason Knight"
    url: "https://plus.google.com/102340116383554399495?rel=author"
    image: "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"
---

<div class="css-full-post-content js-full-post-content">
This post again is mainly for Linux command line users, but it may have more general appeal as well:<br /><br />Computers often make our lives easier in innumerable ways, but it is often quite a challenge to figure out the 'best' (or even a good) way to perform a single task. I'd like to share an example of where I hit an sweet spot towards this effort while backing up some pictures the other day.<br /><br />The general problem is simple: you have multiple computers/devices and you aren't sure whether a set of pictures was backed up up to your house-wide backup solution (you do have one right?). This becomes especially difficult when you aren't the main operator of some of those devices, and so it becomes really confusing who took what pictures off the camera at what time and whether they were backed up.<br /><br />The naiive solution is to look at the set of pictures in question, and browse through your backup trying to find the same folder name and then check the pictures inside. To speed this up, I used the <span style="font-family: Courier New, Courier, monospace;">find</span> command in Linux which works as follows:<br /><blockquote class="tr_bq"><span style="font-family: Courier New, Courier, monospace;">find &lt;dir&gt; -iname &lt;filename&gt;<br/></span></blockquote>Where -iname specifies that we don't care about the case, and dir specifies the directory to begin our search (this is recursive, so it includes all files and folders underneath).<br /><br />So after picking a file name at random from the set of pictures in question (IMG_4071.JPG), I searched and found a few results. Then rather than browsing to this location and checking the files manually, I decided to use a little more of find's magic: We can also tell find to perform a command on each file that matches:<br /><blockquote class="tr_bq"><span style="font-family: Courier New, Courier, monospace;">find &lt;dir&gt; -iname &lt;filename&gt; -exec &lt;cmd&gt; \;<br/></span></blockquote>Where cmd operates on each file separately and the escaped semicolon (\;) tells find that the command is finished. So I performed the following command on both the folder in question, and in the backup directory and compared the results:<br /><blockquote class="tr_bq"><span style="font-family: 'Courier New', Courier, monospace;">find &lt;dir&gt; -iname IMG_4071.JPG -exec md5sum {} \;<br/></span></blockquote>Now md5sum is a program that computes a short string that is designed to be unique but non-random based on the data in the file. Thus if the two images had matching md5sums, then they would be the same image data with overwhelming probability.<br /><br />This way I could quickly determine, at a glance, if I had already backed up an image (and by extension, a set of pictures) without having to search through hundreds of directories, and tens of thousands of pictures.<br /><br />And yes, this could be extended to even fancier methods, but I think this is a very optimal point of amount of work put in (writing a single command), and what I needed from it.
</div>