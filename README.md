[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/muhamad-refaldo/gta6-clipper-20261120/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard)
[![Reward](https://make.fun/badge/gta6-clipper-01/muhamad-refaldo/gta6-clipper-20261120/reward.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard)

# GTA 6 in 28 Seconds — and How Clips Like This Earn Money

A vertical YouTube Short cut from Rockstar Games' official **Grand Theft Auto VI Trailer 2**, entered in the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01). Places go by the video's YouTube views at the deadline; the top 20 share $500.

## The clip

The video is 28 seconds, 1080x1920 (9:16), H.264 + AAC — a Short.

**The moment I chose — the trailer's action climax (Trailer 2, 2:20–2:32).**
I watched the whole trailer frame by frame and picked this stretch because it is the most instantly readable GTA moment in it: Jason and Lucia tearing across the water on a jet ski with the Vice City skyline behind them, then Jason on a motorcycle with a plane swooping past, a night heist truck, and a speedboat chase with a police helicopter overhead. Two leads, vehicles, a police pursuit, sun on the water — everything that makes people stop scrolling and think "that's GTA". The first frame is the jet ski shot, so the hook lands in the very first second.

**The pitch (from 0:12).**
After the action, the clip turns to the viewer over two calm, clean shots — a plane over the Vice City highway, then Jason and Lucia on a sunset dock — and says it in text on screen and in a voiceover: *"Make clips like this with AI, and earn money on make.fun"*, with the bounty page `make.fun/bounty/gta6-clipper-01` on screen at the end. The voice is an English text-to-speech track: "GTA 6 is finally here. And you can make clips like this with AI, and earn real money doing it, on make.fun."

## How it was made

- **Footage:** Rockstar Games' official GTA VI Trailer 2, downloaded from Rockstar's YouTube channel with yt-dlp (4K, 3840x2160) in this session.
- **Cut:** ffmpeg. The trailer is letterboxed, so I cropped the 3840x1728 content area to a centred 972x1728 vertical slice and scaled it to 1080x1920 — a near-1:1 upscale, so the clip stays sharp. Three segments: the 12-second action climax, then two 8-second pitch backdrops.
- **Text:** ffmpeg drawtext (DejaVu Sans Bold, white with a black outline and a translucent backing box so it reads over bright sky).
- **Voice:** text-to-speech, mixed under the trailer audio (the trailer audio is ducked to 25% during the pitch so the voice stays clear).
- **Render:** `clip.mp4` in this workspace (`~/workspace/makefun-gta6-clipper/clip.mp4`), verified with ffprobe (1080x1920, 28.0s, H.264 + AAC) and by watching frames at 0:01, 0:15, 0:23 and 0:26.

## The entry

`VIDEO.json` at this repository's root holds the video's YouTube address. `main.ts` (Node 22 standard library only) copies `VIDEO.json` into the output directory — that is all the program does. The clip itself is uploaded to YouTube as a public Short; this repository only hands in its address.

The video's description carries the bounty's required line and the entrant's play code, as the bounty requires.

## License

MIT — see [LICENSE](LICENSE).
