import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function UserForm() {
  const [form] = Form.useForm();
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  // Validate that the uploaded file is an image
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("The file must be an image (jpg/png/webp).");
    }
    return isImage ? true : Upload.LIST_IGNORE; // block non-image files
  };

  // Generate preview when a file is selected
  const handleChange = (info) => {
    const selectedFile = info.file.originFileObj;
    if (selectedFile) {
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
    }
  };

  // Form submit
  const onFinish = async (values) => {
    if (!file) {
      message.error("Please add a photo");
      return;
    }

    // Prepare FormData to send to server
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("photo", file);

    // "Send" data to the server
    await fetch("...", {
      method: "...",
      body: formData,
    });

    message.success("Form submitted successfully!");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Your name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Invalid email format" },
        ]}
      >
        <Input placeholder="example@gmail.com" />
      </Form.Item>

      <Form.Item label="Photo">
        <Upload
          beforeUpload={beforeUpload}
          onChange={handleChange}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "100%", marginTop: 15, borderRadius: 8 }}
          />
        )}
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Form>
  );
}
