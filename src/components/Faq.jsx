import React from "react";

const Faq = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-white from-30% via-green-500 to-green-800">
      <div className="mx-3 bg-white">
        <div className="m-auto max-w-screen-xl px-8">
          <h1 class="text-[32px] md:text-[50px] lg:text-[77px] tracking-tight">
            Frequently asked questions
          </h1>
          <div style={{ height: "3rem" }}></div>
          <ul>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  How do Daimo accounts work?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>Daimo accounts are Ethereum accounts.</p>
                  <p>
                    Under the hood, they're a new and much-improved type called
                    an ERC-4337 contract account. Each device you add to your
                    account stores a secret key. When you send money, your phone
                    first authenticates you with FaceID or similar, then
                    cryptographically signs the transaction using that key.
                  </p>
                  <p>Daimo is non-custodial. Your keys, your coins.</p>
                  <p>
                    Daimo offers stronger security than traditional wallets.
                    Keys live in dedicated hardware made for storing secrets,
                    such as Secure Enclave on iPhone, and never leave your
                    device.
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  Which stablecoin does Daimo use?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>
                    Daimo runs on USDC, a high-quality stablecoin issued by
                    Circle.
                  </p>
                  <p>
                    Stablecoins are cryptocurrencies designed to maintain a
                    stable value. Many are pegged to the dollar, so that one
                    coin is worth $1. Circle is a US-based licensed money
                    transmitter partnered with Coinbase. USDC is one of the
                    largest and most liquid onchain dollar equivalents.{" "}
                    <a target="_blank" href="https://bluechip.org/coins/usdc">
                      Learn more on Bluechip.
                    </a>
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  Which blockchain does it run on?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>Daimo uses Base, an Ethereum rollup.</p>
                  <p>
                    Rollups support near-instant transactions that cost a few
                    cents each. By contrast, transactions on the underlying
                    Ethereum chain (layer 1 or L1) take about 10 times as long
                    and cost a few dollars each. Rollups accomplish this by
                    bundling many transactions into a single L1 transaction.
                    They inherit the strong guarantees of Ethereum: like L1,
                    Base is reliable and secure, and works worldwide.{" "}
                    <a target="_blank" href="https://l2beat.com/">
                      Learn more on L2Beat.
                    </a>
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  Can I send other coins like USDT, or use other chains like
                  Polygon?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>
                    Not yet. We plan to support payments in other stablecoins
                    and on other chains soon.
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  Who can see my Daimo transactions?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>
                    Currently, all Ethereum transactions are generally public,
                    including Daimo transactions. We plan to add private
                    payments as the infrastructure and support for them matures.
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
            <li class="border-b border-gray-200">
              <details class="group">
                <summary class="text-[16px] md:text-[22px] text-[#323232] leading-none cursor-pointer py-8 flex justify-between items-center">
                  Is Daimo open source?
                </summary>
                <p class="text-[16px] md:text-[22px] text-[#777] leading-snug">
                  <p>
                    Yes, Daimo is and will always be open-source under GPLv3.
                    We're here to collaborate. We want to make self-custody
                    fast, safe, and easy.{" "}
                    <a
                      target="_blank"
                      href="https://github.com/daimo-eth/daimo"
                    >
                      See more on our Github.
                    </a>
                  </p>
                </p>
                <div style={{ height: "1rem" }}></div>
              </details>
            </li>
          </ul>
          <div style={{ height: "6rem" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
