import React, { useState } from "react";
import { Button, Tag, Modal } from "antd";
import "./PropertyCard.css";

const PropertyCard = ({ property, onBuyOrRent }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDetailsClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="property-card">
      <h3 className="property-title">{property.title}</h3>
      <p className="property-user">
        <strong>İlan Sahibi:</strong> {property.username || "Bilinmiyor"}
      </p>
      <p className="property-price">
        <strong>Fiyat:</strong> {property.price} TL
      </p>
      <p className="property-m2">
        <strong>Metrekare:</strong> {property.m2} m²
      </p>
      <p className="property-odasayisi">
        <strong>Oda Sayısı:</strong> {property.odasayisi}
      </p>
      <p className="property-status">
        <strong>Durum:</strong>{" "}
        <Tag color={property.status ? "green" : "red"}>
          {property.status ? "Devam Ediyor" : "Satıldı/Kiralandı"}
        </Tag>
      </p>
      <Button
        type="primary"
        onClick={() => onBuyOrRent(property)}
        className="buy-rent-button"
        disabled={!property.status}
      >
        {property.rentorsale === "Satılık" ? "Satın Al" : "Kirala"}
      </Button>
      <Button
        type="default"
        onClick={handleDetailsClick}
        className="property-details-button"
      >
        Detaylar
      </Button>

      {/* Detaylar Modalı */}
      <Modal
        title="İlan Detayları"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Kapat
          </Button>,
        ]}
      >
        <p>
          <strong>İlan Sahibi:</strong> {property.username || "Bilinmiyor"}
        </p>
        <p>
          <strong>Başlık:</strong> {property.title || "Belirtilmedi"}
        </p>
        <p>
          <strong>Fiyat:</strong> {property.price || "Belirtilmedi"} TL
        </p>
        <p><strong>{property.odasayisi || "Oda bilgisi yok"} - {property.m2 ? `${property.m2.toLocaleString()} m²` : "m² bilgisi yok"}</strong></p>

        <p>
          <strong>Oda Sayısı:</strong> {property.odasayisi || "Belirtilmedi"}
        </p>
        <p>
          <strong>İl:</strong> {property.il || "Belirtilmedi"}
        </p>
        <p>
          <strong>İlçe:</strong> {property.ilçe || "Belirtilmedi"}
        </p>
        <p>
          <strong>Mahalle:</strong> {property.mahalle || "Belirtilmedi"}
        </p>
        <p>
          <strong>Kiralık mı Satılık mı?:</strong> {property.rentorsale || "Belirtilmedi"}
        </p>
        <p>
          <strong>Balkon:</strong> {property.balkon || "Belirtilmedi"}
        </p>
        <p>
          <strong>Asansör:</strong> {property.asansör || "Belirtilmedi"}
        </p>
        <p>
          <strong>Eşyalı:</strong> {property.esyali || "Belirtilmedi"}
        </p>
        <p>
          <strong>Durum:</strong>{" "}
          <Tag color={property.status ? "green" : "red"}>
            {property.status ? "Devam Ediyor" : "Satıldı/Kiralandı"}
          </Tag>
        </p>
        <p>
          <strong>Bahçe:</strong> {property.bahce || "Belirtilmedi"}
        </p>
        <p>
          <strong>Otopark:</strong> {property.otopark || "Belirtilmedi"}
        </p>
        <p>
          <strong>Isıtmalı:</strong> {property.isitma || "Belirtilmedi"}
        </p>
      </Modal>
    </div>
  );
};

export default PropertyCard;
