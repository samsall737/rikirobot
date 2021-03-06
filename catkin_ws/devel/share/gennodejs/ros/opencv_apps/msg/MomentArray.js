// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Moment = require('./Moment.js');

//-----------------------------------------------------------

class MomentArray {
  constructor() {
    this.moments = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MomentArray
    // Serialize the length for message field [moments]
    bufferInfo = _serializer.uint32(obj.moments.length, bufferInfo);
    // Serialize message field [moments]
    obj.moments.forEach((val) => {
      bufferInfo = Moment.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MomentArray
    let tmp;
    let len;
    let data = new MomentArray();
    // Deserialize array length for message field [moments]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [moments]
    data.moments = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Moment.deserialize(buffer);
      data.moments[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/MomentArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fb51ddd1dea5da45f56842efe759d448';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Moment[] moments
    
    ================================================================================
    MSG: opencv_apps/Moment
    # spatial moments
    float64 m00
    float64 m10
    float64 m01
    float64 m20
    float64 m11
    float64 m02
    float64 m30
    float64 m21
    float64 m12
    float64 m03
    
    # central moments
    float64 mu20
    float64 mu11
    float64 mu02
    float64 mu30
    float64 mu21
    float64 mu12
    float64 mu03
    
    # central normalized moments
    float64 nu20
    float64 nu11
    float64 nu02
    float64 nu30
    float64 nu21
    float64 nu12
    float64 nu03
    
    # center of mass m10/m00, m01/m00
    Point2D center
    float64 length
    float64 area
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = MomentArray;
