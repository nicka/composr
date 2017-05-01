import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable max-len */
const Faq = () =>
  <div>
    <h1>FAQ</h1>
    <b>What is BandLab?</b><br />
    <a href="https://www.bandlab.com" target="_blank" rel="noopener noreferrer">BandLab</a> is a free, all-in-one, cloud-based recording studio for making music.
    <br />
    <br />
    Join a community of musicians who collaborate, make and and share music from all around the world. No matter what genre of music you love, instrument you play or platform you use, you’ll find other people who share your passion in BandLab.
    <br />
    <br />
    <b>What will happen to my Composr account? Will I lose my songs and followers?</b><br />
    We’ll make sure your transition from Composr to BandLab is as easy as possible.
    <br />
    <br />
    Your songs will be migrated along with your profile to BandLab. If your followers and those you follow join BandLab as well, they would show up as followers/following on your BandLab profile as well.
    <br /><br />
    <b>How come I don’t see any followers/followings?</b><br />
    The most likely reason is they haven’t migrated their profile over to BandLab. If not, your followers and those you follow on Composr probably did not migrate their profiles to BandLab.
    <br />
    <br />
    <b>Can I still use Composr after I migrate my profile to BandLab?</b><br />
    Composr will cease operations on the 1st of October. You can still enjoy using Composr before this date, but we highly recommend you continue your projects on BandLab. If you don’t intend to migrate your work over to BandLab, be sure to save anything you want before the 1st of October.
    <br />
    <br />
    <b>Argh! I forgot to click the “Move my songs to BandLab” box when I logged into BandLab for the first time. Are they lost forever?</b><br />
    Don’t sweat it—they’re not lost, but you’ll need to write to <a href="mailto:support@bandlab.com">support@bandlab.com</a> and include the email address or username associated with your Composr account.
    <br />
    <br />
    <b>What would happen to Open Pull Requests?</b><br />
    Don’t worry, all your Pull Requests will still be there. Any contributions you make on other user’s songs on Composr, will become a “Forked” copy on BandLab.
    <br />
    <br />
    <b>What are Forks?</b><br />
    When you Fork a song on BandLab, it gives you a personal copy of that song for you to work with. You have the freedom to add, tweak or take it in any direction you want. You can also inspire other users by allowing them to Fork your songs.
    <br />
    <br />
    <Link replace to="/">Back to announcement</Link>
  </div>;
/* eslint-enable max-len */

export default Faq;
