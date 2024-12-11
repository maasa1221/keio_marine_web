"use client";

import React from "react";
import Image from "next/image";
import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
  return (
    <main>
      <header className="header">
        <div>
          <Image
            src="/logo1.png"
            alt="慶應マリンロゴ"
            width={90}
            height={90}
            priority
            className="logo-image"
          />
        </div>
        <p>KEIO UNIVERSITY MARINE YACHT CLUB SINCE 1951</p>
      </header>

      <section className="explain">
        <div className="gif">
          <Image
            src="/sea.png"
            alt="ヨットクラブ活動"
            width={900}
            height={500}
            priority
            className="main-animation"
          />
        </div>
      </section>

      <div className="line"></div>

      <div className="inline2">
        <div className="concept2">
          <p>
            海洋研究会マリンヨットクラブ（略称　慶応マリン）は慶應義塾大学文化団体連盟所属の公認サークルです。
            ヨットを活動として楽しむと同時に、江ノ島を拠点としてマリンスポーツの発展にも貢献していけるように日々尽力しております。
          </p>
          <div>
            <Image
              src="/logo2.png"
              alt="慶應マリンロゴ"
              width={180}
              height={180}
              priority
              className="club-logo"
            />
          </div>
        </div>
      </div>

      <div className="line"></div>

      <section className="activities">
        <div className="activity-grid">
          <div className="activity-item">
            <Image
              src="/sea.png"
              alt="ヨット"
              width={300}
              height={200}
              className="activity-image"
            />
            <h3>ヨット</h3>
          </div>
        </div>
      </section>

      <div className="line"></div>

      <InstagramFeed />

      <div className="line"></div>

      <div className="text-center-custom">
        <h2>活動場所</h2>
        <p>江ノ島の片瀬東浜で活動しています</p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16127.273370560959!2d139.48724844192145!3d35.306167052510276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1547354984592"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
