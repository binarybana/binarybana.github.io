+++
title = "There and Back Again: A Tale of 31 Bitcoins or \"How I nearly lost $300 in the Bitcoin cryptocurrency\""
permalink = "/2012/07/there-and-back-again-tale-of-31.html"
date = 2012-08-01T02:09:00.002000Z
updated = "2012-08-01 02:09:29"

[blogger]
siteid = "15125061"
postid = "1205885849448342760"
comments = "4"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
I wanted to pay my brother back for something, but I wanted to have a little fun while doing it. So I decided to send him the money in <a href="http://bitcoin.org/">Bitcoins</a> which I have a little stockpile that I incidentally created while playing around with it back when it was easy to do such things (before it became 'popular'). <br /><br />I didn't want him to have to deal with creating his own wallet and downloading the blockchain (2+ GB on my machine), so I decided to use the new YCombinator startup <a href="https://coinbase.com/">Coinbase</a> to send him the Bitcoins to his email address (which would then walk him through the easy process of setting up an online wallet). <br /><br />I also wanted to play around with a more advanced local bitcoin client than the traditional one called <a href="http://bitcoinarmory.com/">Armory</a>. It had quite a few neat features that I wanted to play around with so I gave it a spin and converted my traditional 'Satoshi' wallet to an Armory wallet. I then transferred 19 BTC from my main wallet to my coinbase wallet in preparation for paying my brother back.<br /><br />At this point, I saw the 19 BTC land in my coinbase wallet, but I had goofed up the Armory wallet by accidentally importing two of the same wallets, having it show twice the amount that I had to spend. So I decided to blow away ~/.armory with a quick rm -rf and restart the program to reimport my wallet from the pristine 'Satoshi' wallet backup.<br /><br />At this point I noticed that my account balance was 50 BTC lower than it was originally and I got that sinking feeling in my stomach. My first thought was to theft, as the bitcoin community has been inundated with compromised wallets and online services, but I knew that was extremely unlikely so I kept digging.<br /><br />At this point I the wonderful blockexplorer showed me <a href="http://blockexplorer.com/tx/1a1eab4011b02c2410d0ff8819bb4abb909e2551328e8096482a25f20dabbc18#i12045224">this page</a> which shows my 19 BTC going out from my wallet, and an additional 31 BTC going out as well! Here if you click on the <a href="http://blockexplorer.com/address/1AEhBXbFbZ6aGNppGHntm4LQbumQXDi99s">outgoing address</a> you are treated to this handy text that ultimately tipped me off: "Every time a transaction is sent, some bitcoins are usually sent back to yourself at a new address..." Then after some more digging I found <a href="https://en.bitcoin.it/wiki/Change">this handy page</a>&nbsp;which describes the concept of 'change' which is similar to the concept of trying to buy a pack of gum with a $20 bill. Sometimes, when trying to send an amount of bitcoins, you will actually need to send out more than you specified, and then receive the remainder into a newly created address in your wallet.<div><br /></div><div>At this, the swift, crystalline hammer of realization struck: I had just deleted the freshly created 'keys' for my bitcoin 'change' when I deleted the .armory folder!</div><div><br /></div><div>In effect, I had told the universe to 'keep the change'. As if I couldn't get those 'keys' back, then no one in the rest of the history of the universe would be able to use my 31 lost bitcoins.</div><div><br /></div><div>The alarm bells began clanging as I realized I had limited time: those 'deleted' files are only really deleted when overwritten (not necessarily when first deleted) so every additional write to my filesystem was another shotgun blast at those poor defenseless keys sitting on the little NAND gates of my SSD. I realized I had three options 1) unmount my filesystem or remount it read-only 2) cleanly shutdown the machine or 3) 'pull the cord'. I knew 2 was a bad idea, as the amount of writes that Chrome alone would make shutting down would be disastrous, and I was unsure if 1 would cause extra writes with flushing the kernel caches to the system and persisting any remaining journal entries so I chose 3 after watching to make sure there was no transient disk writes. If anyone knows which is actually better, I would be curious to find out.</div><div><br /></div><div>Now upon rebooting into a Live Ubuntu flash drive, I began researching my options. A program called <a href="http://carlo17.home.xs4all.nl/howto/undelete_ext3.html">ext3grep</a> had the promising tag line:</div><div><blockquote class="tr_bq">On February 7th, 2008, I accidently deleted my whole home directory: over 3 GB of data, deleted with&nbsp;<code>rm -rf</code>. The only backup that I had was from June 2007. Not being able to undelete was&nbsp;<em>unacceptable</em>. So, I ignored what everyone tried to tell me and started to learn how an ext3 file system really works, and what&nbsp;<em>exactly</em>&nbsp;happens when files are deleted...&nbsp;</blockquote><blockquote class="tr_bq">Three weeks and nearly 5000 lines of code later, I had recovered every file on my disk.</blockquote>Unfortunately, it kept bugging out on me due to the differences between ext4 and ext3, so I had to move on, but it helped me wrap my head around some of the ext filesystem.<br /><br />Next I found <a href="http://extundelete.sourceforge.net/">extundelete</a>, which also looked promising due to it's claim of being better than ext3grep and supporting ext4.<br /><br />After finding the source doesn't compile on e2fslibs-dev &gt; 1.49 (or something like that), I found a newer version available in the Debian sid repositories, but to make a long story short, it didn't find a single deleted file on my filesystem.<br /><br />At this point it began to look hopeless, as I figured if I couldn't achieve my desired ends with these powerful tools, then what luck did I have left?<br /><br />Luckily I kept going and found the wonderful <a href="http://www.cgsecurity.org/wiki/PhotoRec">PhotoRec</a>&nbsp;which scans the filesystem block by block -ignoring the inodes that normally direct the ext filesystem - and searching for specific header bytes. Obviously the wallet format of Armory was not one of the 300+ supported filetypes, but with a bit of ghex (hex editor), some <a href="http://bitcoinarmory.com/index.php/armory-wallet-files">documentation</a>, and a flexible program I was able to specify my own filetype.<br /><br />At this point, upon scanning all 32GB of my SSD, it found 3 candidates. A promising number, because I expected 2 (from the reinitialized .armory directory), so perhaps one had survived? Unfortunately, it was not all fun and games, as 2 of those 3 were over 4GB in size, so they had either been overwritten somehow (the inodes, which describe the file and the the number of blocks that a file resides on, are often the first to go when a file is deleted, so perhaps the inode and some of the downstream blocks of the wallet files had been deleted and photorec naively and safely just kept copying).<br /><br />Luckily, after failing to find the address string [1] in any of these three files, I realized that the Bitcoin protocol and Armory wallet actually use the Hash160 of the public key, and upon searching for that, I found that only one of the 3 fit the bill, and upon some inspection by ghex and a simple head -c 64387 file.dump &gt; possible_wallet I had a winner! It was a pleasure to see those 30 BTC back in my wallet.<br /><br />I didn't cover some of the fun things I tried here, like binary grepping, grepping an entire block device, the creation of testing block devices etc... but you get the idea.<br /><br />So overall, I had a bit of fun learning some linux filesystem tricks and realizing the valuable service that online bitcoin wallets bring to the table.<br /><br />Now the only question that remains is should I switch to online wallets for all my funds to avoid any future mishaps or continue down the path I'm on?<br /><br />[1] - 1AEhBXbFbZ6aGNppGHntm4LQbumQXDi99s</div>
</div>
<div class="css-full-comments-content js-full-comments-content">
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/04895830617798093093">
  <div class="css-comment-name js-comment-name">
    Mark
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-08-01T02:40:52.174Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Yipee! Glad you figured it out. I should have mentioned PhotoRec; its what I&#39;ve used in the past.
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
    2012-08-01T04:10:59.298Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Actually, I&#39;ve used it in the past too, but I didn&#39;t think it would apply here (I had just pigeonholed it as a JPEG/movie recovery tool).
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/03584050342779359779">
  <div class="css-comment-name js-comment-name">
    StartBreakingFree.com
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-08-03T04:07:06.188Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    This comment has been removed by the author.
  </div>
  <br/>
</div>
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/03584050342779359779">
  <div class="css-comment-name js-comment-name">
    Brian Armstrong
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-08-03T04:08:45.814Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Hey Jason, thanks for trying out Coinbase! Sounds like you are more tech savvy than most, but yes our goal is to make bitcoin easy to use you can focus on the important stuff (who you&#39;re paying and for what) instead of wondering about how your wallet works.<br /><br />I&#39;ve been telling people it&#39;s a bit like Gmail. Everyone used to run their own email server (and some nerds still do, as a nerd myself I can say this). But for the vast majority of people, letting a company (Google) worry about security and backups is the better solution, and even many nerds use Gmail today. Even if they know how to run their own email server it&#39;s just not worth the trouble in the majority of cases. Anyway, thanks and keep in touch!
  </div>
  <br/>
</div>
</div>