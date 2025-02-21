touitomamout is a project that scrapes twitter and reposts the posts to bluesky & mastodon. For my purposes, I want to scrape twitter and repost the posts to bluesky.


## Dependencies
https://github.com/bluesky-social/atproto
https://github.com/the-convocation/twitter-scraper


## Possible active forks:
https://github.com/MagsMagnoli/touitomamout


## Known Issues:
- The project is not actively maintained.
- Some x.com posts are photos and videos. Bluesky does not support photos and videos.
- Some x.com posts are an image with a link. Bluesky does not support this.
- Bluesky does only supports video up to 60 seconds. No fork can fix this. Only BlueSky can change the feature to allow longer videos.

### Example of a post that will not post to bluesky:
These posts are a photo with attached with a link.
https://x.com/LAFC/status/1892641571096416757
https://x.com/LAFC/status/1892627815130136856
https://x.com/LAFC/status/1892575352977006779

Posts with a video over 60 seconds will post to bluesky. The bsky post says there is a video but there is not one
https://x.com/LAFC/status/1892581312948584501


