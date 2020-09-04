import React from 'react';
import { Form, Row, Col, DatePicker, Input, Select, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    sm: {
      span: 4,
    },
  },
};
const formItemOtherLayout = {
  labelCol: {
    sm: {
      span: 8,
    },
  },
};
const config = {
  labelCol: {
    sm: {
      span: 5,
    },
  },
  rules: [
    {
      type: 'object',
      required: true,
      message: '날짜를 선택해주세요.',
    },
  ],
};
const FormComponent = () => {
  const onFinish = fieldsValue => {
    if (!fieldsValue.contents || !fieldsValue.contents.length) return alert('항목을 추가해주세요.');
    const values = {
      ...fieldsValue,
      datePicker: fieldsValue['datePicker'].format('YYYY-MM-DD'),
    };
    console.log(values);
  };

  return (
    <>
      <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="datePicker" label="날짜" {...config}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.List name="contents">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(field => (
                  <Space
                    key={field.key}
                    style={{
                      display: 'block',
                      position: 'relative',
                      padding: 24,
                      marginBottom: 10,
                      border: '1px solid #eee',
                      borderRadius: 5,
                      background: '#fbfbfb',
                    }}
                    align="start"
                  >
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'startingPoint']}
                          fieldKey={[field.fieldKey, 'startingPoint']}
                          label="당상(출발)"
                          rules={[{ required: true, message: '항목이 비어있습니다.' }]}
                        >
                          <Input name="startingPoint" type="text" placeholder="당상(출발)" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'arrivalPoint']}
                          fieldKey={[field.fieldKey, 'arrivalPoint']}
                          label="당착(도착)"
                          rules={[{ required: true, message: '항목이 비어있습니다.' }]}
                        >
                          <Input name="arrivalPoint" type="text" placeholder="당착(도착)" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'item']}
                          fieldKey={[field.fieldKey, 'item']}
                          label="품목"
                          placeholder="품목"
                          rules={[{ required: true, message: '항목이 비어있습니다.' }]}
                        >
                          <Input name="item" type="text" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={4}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'price']}
                          fieldKey={[field.fieldKey, 'price']}
                          label="금액"
                          rules={[{ required: true, message: '항목이 비어있습니다.' }]}
                          {...formItemOtherLayout}
                        >
                          <Input name="price" type="price" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'fee']}
                          fieldKey={[field.fieldKey, 'fee']}
                          label="수수료"
                          rules={[{ required: true, message: '항목이 비어있습니다.' }]}
                          {...formItemOtherLayout}
                        >
                          <Input name="fee" type="number" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'bill']}
                          fieldKey={[field.fieldKey, 'bill']}
                          label="계산서"
                          {...formItemOtherLayout}
                        >
                          <Select>
                            <Option value="발행">발행</Option>
                            <Option value="미발행">미발행</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'receipt']}
                          fieldKey={[field.fieldKey, 'receipt']}
                          label="인수증"
                          {...formItemOtherLayout}
                        >
                          <Select>
                            <Option value="있음">있음</Option>
                            <Option value="없음">없음</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'etc']}
                          fieldKey={[field.fieldKey, 'etc']}
                          label="비고"
                        >
                          <Input name="etc" type="text" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                      style={{ position: 'absolute', top: 10, right: 10 }}
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add({ bill: '미발행', receipt: '없음' });
                    }}
                    block
                  >
                    <PlusOutlined /> 항목 추가
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormComponent;
