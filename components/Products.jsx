"use client";

import { use, useState } from "react";
import Portal from "./Portal";
import { useProducts } from "@/context/ProductContext";

const Products = (props) => {
  const { planner, stickers } = props;
  const [portalImage, setPoratlImage] = useState(null);

  const { handleIncrementProduct } = useProducts();

  if (!stickers.length || !planner) {
    return null;
  }

  return (
    <>
      {portalImage && (
        <Portal
          handleCLosePortal={() => {
            setPoratlImage(null);
          }}
        >
          <div className="portal-content">
            <img
              src={`med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
              className="img-display"
            />
          </div>
        </Portal>
      )}
      <div className="section-container">
        <div className="section-header">
          <h2>Shop Our Selection</h2>
          <p>From organisation or accessorization</p>
        </div>
        <div className="planner-container">
          <div>
            <button
              onClick={() => {
                setPoratlImage("planner");
              }}
              className="img-button"
            >
              <img src="low_res/planner.jpeg" alt="" />
            </button>
          </div>
          <div className="planner-info">
            <p className="text-large planner-header">
              Medieval Dragon Month Planner
            </p>
            <h3>
              <span>$</span>14.99
            </h3>
            <p>
              Step into a realm of fantasy and organization with our{" "}
              <strong>Medieval Dragon Month Planner</strong>! This
              high-resolution PNG asset combines the fierce elegance of dragons
              with intricate medieval designs to create a planner that's not
              only functional but also a work of art. Whether you&apos;re
              jotting down quests, planning battles, or just scheduling your
              weekly grocery run, this planner is your ultimate companion.
            </p>
            <ul>
              <li>
                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon
                motifs and medieval-inspired borders make every month feel
                legendary.
              </li>
              <li>
                <strong>Fully Printable:</strong> Designed at ultra-high
                resolution, it&apos;s perfect for printing on any size paper,
                from A4 to poster-sized displays.
              </li>
            </ul>
            <div className="purchase-btns">
              <button
                onClick={() => {
                  const plannerPriceId = planner.default_price;
                  handleIncrementProduct(plannerPriceId, 1, planner);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-header">
          <h2>Or Collect Your Favorite Tech</h2>
          <p>Choose from our custom designed tech logos</p>
        </div>
        <div className="sticker-container">
          {stickers.map((sticker, stickerIndex) => {
            const stickerName = sticker.name;
            const stickerUrl = sticker.name
              .replaceAll(" Sticker.png", "")
              .replaceAll(" ", "_");
            return (
              <div key={stickerIndex} className="sticker-card">
                <button
                  onClick={() => {
                    setPoratlImage(stickerUrl);
                  }}
                  className="img-button"
                >
                  <img
                    src={`low_res/${stickerUrl}.jpeg`}
                    alt={`${stickerUrl}-low-res`}
                  />
                </button>
                <div className="sticker-info">
                  <p className="text-medium">
                    {stickerName.replaceAll("_", "")}
                  </p>
                  <p>{sticker.description}</p>
                  <h4>
                    <span>$</span>
                    {sticker.prices[0].unit_amount / 100}
                  </h4>
                  <button
                    onClick={() => {
                      const StickerPriceId = sticker.default_price;
                      handleIncrementProduct(StickerPriceId, 1, sticker);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
