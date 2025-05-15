import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";

const { Option } = Select;

const AddPropertyModal = ({ visible, onCancel, onAdd }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Modal
      title="Yeni İlan Ekle"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="Başlık"
          rules={[{ required: true, message: "Lütfen başlık girin!" }]}
        >
          <Input placeholder="Başlık" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Fiyat"
          rules={[{ required: true, message: "Lütfen fiyat girin!" }]}
        >
          <Input placeholder="Fiyat" type="number" />
        </Form.Item>
        <Form.Item
          name="m2"
          label="Metrekare"
          rules={[{ required: true, message: "Lütfen metrekare girin!" }]}
        >
          <Input placeholder="Metrekare" type="number" />
        </Form.Item>
        <Form.Item
          name="odasayisi"
          label="Oda Sayısı"
          rules={[{ required: true, message: "Lütfen oda sayısını girin!" }]}
        >
          <Input placeholder="Oda Sayısı" type="number" />
        </Form.Item>
        <Form.Item
          name="rentorsale"
          label="Kiralık mı Satılık mı?"
          rules={[{ required: true, message: "Lütfen bir seçim yapın!" }]}
        >
          <Select placeholder="Kiralık mı Satılık mı?">
            <Option value="Kiralık">Kiralık</Option>
            <Option value="Satılık">Satılık</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="il"
          label="İl"
          rules={[{ required: true, message: "Lütfen il girin!" }]}
        >
          <Input placeholder="İl" />
        </Form.Item>
        <Form.Item
          name="ilçe"
          label="İlçe"
          rules={[{ required: true, message: "Lütfen ilçe girin!" }]}
        >
          <Input placeholder="İlçe" />
        </Form.Item>
        <Form.Item
          name="mahalle"
          label="Mahalle"
          rules={[{ required: true, message: "Lütfen mahalle girin!" }]}
        >
          <Input placeholder="Mahalle" />
        </Form.Item>
        <Form.Item name="balkon" label="Balkon">
          <Select placeholder="Balkon">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item name="asansör" label="Asansör">
          <Select placeholder="Asansör">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item name="esyali" label="Eşyalı">
          <Select placeholder="Eşyalı">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item name="isitma" label="Isıtmalı">
          <Select placeholder="Isıtmalı">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item name="bahce" label="Bahçeli">
          <Select placeholder="Bahçeli">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item name="otopark" label="Otopark">
          <Select placeholder="Otopark">
            <Option value="Evet">Evet</Option>
            <Option value="Hayır">Hayır</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPropertyModal;