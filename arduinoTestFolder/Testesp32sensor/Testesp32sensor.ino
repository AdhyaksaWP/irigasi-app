#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

BLECharacteristic *pCharacteristic;

void setup() {
  Serial.begin(115200);
  Serial.println("63,4549,464,056,457,5845");

  BLEDevice::init("ESP32_Irrigation_Sensor");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  pCharacteristic = pService->createCharacteristic(
                      CHARACTERISTIC_UUID,
                      BLECharacteristic::PROPERTY_READ |
                      BLECharacteristic::PROPERTY_WRITE |
                      BLECharacteristic::PROPERTY_NOTIFY
                    );

  pCharacteristic->setValue("Hello World says Neil");
  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() {
  // Update and notify the characteristic value
  static int sensorValue = 0;
  sensorValue++;
  
  // Convert the sensor value to a string and set it as the characteristic value
  String sensorValueStr = String(sensorValue);
  String sensorValueToSend;

  for (int i = 0; i<6; i++){
    sensorValueToSend += sensorValueStr + ",";
  }
  pCharacteristic->setValue(sensorValueToSend.c_str());
  
  // Notify the client of the new value
  pCharacteristic->notify();
  
  Serial.print("Sent value: ");
  Serial.println(sensorValueToSend);

  delay(2000); // Delay for 2 seconds before sending the next value
}
