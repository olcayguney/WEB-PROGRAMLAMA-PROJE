import React, { useState } from "react";
import { Modal, Button, Input, Select, Slider, message } from "antd";

const { Option } = Select;

const defaultFilters = {
  title: "",
  priceRange: [0, 1000000],
  metrekareRange: [0, 1000],
  odaSayisi: "",
  il: "",
  ilçe: "",
  mahalle: "",
  balkon: "Fark Etmez",
  rentorsale: "Fark Etmez",
  asansör: "Fark Etmez",
  esyali: "Fark Etmez",
  isitma: "Fark Etmez",
  bahce: "Fark Etmez",
  otopark: "Fark Etmez",
  username: "",
  status: "Fark Etmez",
};

const SearchBar = ({ onFilter, filteredData }) => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isMailModalVisible, setIsMailModalVisible] = useState(false);

  const [filters, setFilters] = useState(defaultFilters);

  const handleInputChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    onFilter(defaultFilters);
    message.success("Filtreler sıfırlandı.");
  };

  const handleFilter = () => {
  try {
    onFilter(filters, false);
    setIsFilterModalVisible(false);
  } catch (error) {
    console.error("Filtreleme işlemi sırasında bir hata oluştu:", error);
    message.error("Filtreleme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
  }
};

  const handleMailGonder = () => {
    try {
      onFilter(filters, false);
      setIsMailModalVisible(true);
    } catch (error) {
      message.error("Mail gönderme önizlemesi sırasında hata oluştu.");
    }
  };

  return (
    <div className="search-bar">
      <Button
        type="primary"
        onClick={() => setIsFilterModalVisible(true)}
        className="filter-button"
      >
        Filtrele
      </Button>

      {}
      <Modal
        title="Filtreleme"
        open={isFilterModalVisible}
        onCancel={() => setIsFilterModalVisible(false)}
        footer={[
          <Button key="reset" danger onClick={handleResetFilters}>
            Filtreleri Temizle
          </Button>,
          <Button key="cancel" onClick={() => setIsFilterModalVisible(false)}>
            İptal
          </Button>,
          <Button key="mail" onClick={handleMailGonder}>
            Mail Gönder
          </Button>,
          <Button key="filter" type="primary" onClick={handleFilter}>
            Filtrele
          </Button>,
        ]}
      >
        {}
        <div className="filter-group">
          <label>Başlık:</label>
          <Input
            placeholder="Başlık"
            value={filters.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>Fiyat Aralığı:</label>
          <Slider
            range
            min={0}
            max={1000000}
            step={1000}
            value={filters.priceRange}
            onChange={(value) => handleInputChange("priceRange", value)}
            className="filter-slider"
          />
        </div>
        <div className="filter-group">
          <label>Metrekare Aralığı:</label>
          <Slider
            range
            min={0}
            max={1000}
            step={10}
            value={filters.metrekareRange}
            onChange={(value) => handleInputChange("metrekareRange", value)}
            className="filter-slider"
          />
        </div>
        <div className="filter-group">
          <label>Oda Sayısı:</label>
          <Input
            placeholder="Oda Sayısı"
            value={filters.odaSayisi}
            onChange={(e) => handleInputChange("odaSayisi", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>İl:</label>
          <Input
            placeholder="İl"
            value={filters.il}
            onChange={(e) => handleInputChange("il", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>İlçe:</label>
          <Input
            placeholder="İlçe"
            value={filters.ilçe}
            onChange={(e) => handleInputChange("ilçe", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>Mahalle:</label>
          <Input
            placeholder="Mahalle"
            value={filters.mahalle}
            onChange={(e) => handleInputChange("mahalle", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>Kiralık mı Satılık mı?</label>
          <Select
            value={filters.rentorsale}
            onChange={(value) => handleInputChange("rentorsale", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Kiralık">Kiralık</Option>
            <Option value="Satılık">Satılık</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Balkon:</label>
          <Select
            value={filters.balkon}
            onChange={(value) => handleInputChange("balkon", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Asansör:</label>
          <Select
            value={filters.asansör}
            onChange={(value) => handleInputChange("asansör", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Eşyalı:</label>
          <Select
            value={filters.esyali}
            onChange={(value) => handleInputChange("esyali", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Isıtmalı:</label>
          <Select
            value={filters.isitma}
            onChange={(value) => handleInputChange("isitma", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Bahçe:</label>
          <Select
            value={filters.bahce}
            onChange={(value) => handleInputChange("bahce", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Otopark:</label>
          <Select
            value={filters.otopark}
            onChange={(value) => handleInputChange("otopark", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Kullanıcı Adı:</label>
          <Input
            placeholder="Kullanıcı Adı"
            value={filters.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label>Durum:</label>
          <Select
            value={filters.status}
            onChange={(value) => handleInputChange("status", value)}
            className="filter-select"
          >
            <Option value="Fark Etmez">Fark Etmez</Option>
            <Option value={true}>Aktif</Option>
            <Option value={false}>Pasif</Option>
          </Select>
        </div>
      </Modal>

      {}
      <Modal
        title="Filtrelenmiş İlanlar Mail Adresinize Gönderildi!"
        open={isMailModalVisible}
        onCancel={() => setIsMailModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsMailModalVisible(false)}>
            Kapat
          </Button>,
        ]}
        width={800}
      >
        {filteredData?.length === 0 ? (
          <p>Filtreye uyan ilan bulunamadı.</p>
        ) : (
          <ul>
            {filteredData.map((item, index) => (
              <li key={index} style={{ marginBottom: "12px" }}>
                <strong>{item.title}</strong> - {item.price} TL - {item.m2} m²<br />
                {item.il}, {item.ilçe}, {item.mahalle} - {item.odasayisi} oda - {item.rentorsale}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
};

export default SearchBar;
