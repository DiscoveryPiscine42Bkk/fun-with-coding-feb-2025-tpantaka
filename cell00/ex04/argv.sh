#!/bin/bash

# ตรวจสอบว่ามี arguments หรือไม่
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  # แสดง arguments ที่รับมา (สูงสุด 3 arguments)
  for i in $(seq 1 3); do
    if [ ! -z "${!i}" ]; then # ตรวจสอบว่า argument ที่ i มีค่าหรือไม่
      echo "${!i}"
    fi
  done
fi