function $setDate(this$static, dayOfMonth){
  this$static.setDate(dayOfMonth);
  return this$static.getTime();
}

function $setFullYear(this$static, year){
  this$static.setFullYear(year);
  return this$static.getTime();
}

function $setFullYear_0(this$static, year, month, day){
  this$static.setFullYear(year, month, day);
  return this$static.getTime();
}

function $setHours(this$static, hours){
  this$static.setHours(hours);
  return this$static.getTime();
}

function $setHours_0(this$static, hours, mins, secs, ms){
  this$static.setHours(hours, mins, secs, ms);
  return this$static.getTime();
}

function $setMinutes(this$static, minutes){
  this$static.setMinutes(minutes);
  return this$static.getTime();
}

function $setMonth(this$static, month){
  this$static.setMonth(month);
  return this$static.getTime();
}

function $setSeconds(this$static, seconds){
  this$static.setSeconds(seconds);
  return this$static.getTime();
}

function $setTime(this$static, milliseconds){
  this$static.setTime(milliseconds);
  return this$static.getTime();
}

function create_0(year, month, dayOfMonth, hours, minutes, seconds, millis){
  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);
}

function $selectRemoveOption(select, index){
  select.remove(index);
}

defineSeed(286, 1, {});
defineSeed(285, 286, {});
function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl_0);
  return this$static.dateTimeFormatInfo;
}

function $getISOTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[4] = data[4] + ~~(offset % 60 / 10) & 65535;
  data[5] = data[5] + offset % 10 & 65535;
  return valueOf_5(data);
}

function $getRFCTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[3] = data[3] + ~~(offset % 60 / 10) & 65535;
  data[4] = data[4] + offset % 10 & 65535;
  return valueOf_5(data);
}

function TimeZone_0(){
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] = data[4] + ~~(~~(offset / 60) / 10) & 65535;
  data[5] = data[5] + ~~(offset / 60) % 10 & 65535;
  data[7] = data[7] + ~~(offset % 60 / 10) & 65535;
  data[8] = data[8] + offset % 10 & 65535;
  return valueOf_5(data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone_0;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + mins;
}

defineSeed(290, 1, {}, TimeZone_0);
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function DateTimeFormatInfoImpl_0(){
}

defineSeed(293, 285, {}, DateTimeFormatInfoImpl_0);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = nullMethod;
  cache = new HashMap_0;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if ($toString_0(buf.data).length > 0) {
    $add_19(this$static.patternParts, new DateTimeFormat$PatternPart_0($toString_0(buf.data), count));
    oldLength = $toString_0(buf.data).length;
    0 < oldLength?($replace(buf.data, 0, oldLength, '') , buf):0 > oldLength && $append_6(buf, initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, -oldLength, 1));
  }
}

function $format(this$static, date, timeZone){
  var ch, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  }
  toAppendTo = new StringBuffer_1;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = $charAt(this$static.pattern, i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch; ++j) {
      }
      $subFormat(toAppendTo, ch, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        $appendNonNull(toAppendTo.data, "'");
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new IllegalArgumentException_1("Missing trailing '");
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_5(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      $appendNonNull(toAppendTo.data, String.fromCharCode(ch));
      ++i;
    }
  }
  return $toString_0(toAppendTo.data);
}

function $formatFractionalSeconds(buf, count, date){
  var time, value;
  time = fromDouble(date.jsdate.getTime());
  if (lt(time, P0_longLit)) {
    value = 1000 - toInt(mod(neg(time), P3e8_longLit));
    value == 1000 && (value = 0);
  }
   else {
    value = toInt(mod(time, P3e8_longLit));
  }
  if (count == 1) {
    value = ~~((value + 50) / 100) < 9?~~((value + 50) / 100):9;
    $appendNonNull(buf.data, String.fromCharCode(48 + value & 65535));
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10) < 99?~~((value + 5) / 10):99;
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value;
  value = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value]);
      break;
    case 4:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value]);
      break;
    case 3:
      $append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value;
  value = date.jsdate.getFullYear() - 1900 + 1900;
  value < 0 && (value = -value);
  switch (count) {
    case 1:
      $append_0(buf.data, value);
      break;
    case 2:
      $zeroPaddingNumber(buf, value % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value, count);
  }
}

function $getNextCharCountInPattern(start){
  var ch, next;
  ch = 'dd/MM/yyyy'.charCodeAt(start);
  next = start + 1;
  while (next < 10 && 'dd/MM/yyyy'.charCodeAt(next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.size_0;
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_8(this$static.patternParts, i + 1), Q$DateTimeFormat$PatternPart))) {
        abut = true;
        dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_2('MLydhHmsSDkK', fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = $substring(text, start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data[i].length;
    if (length_0 > bestMatchLength && $indexOf_2(textInLowerCase, data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse_1(this$static, text, date){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord_0;
  parsePos = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size_0; ++i) {
    part = dynamicCast($get_8(this$static.patternParts, i), Q$DateTimeFormat$PatternPart);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = parsePos[0];
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith(text, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date)) {
    return 0;
  }
  return parsePos[0];
}

function $parse_2(this$static, text){
  var charsConsumed, curDate, date;
  curDate = new Date_1;
  date = new Date_2(curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse_1(this$static, text, date);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw new IllegalArgumentException_1(text);
  }
  return date;
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text.length) {
    return -1;
  }
  ch = text.charCodeAt(ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= text.length) {
      break;
    }
    ch = text.charCodeAt(ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern_0(this$static){
  var buf, ch, count, i, inQuote;
  buf = new StringBuffer_1;
  inQuote = false;
  for (i = 0; i < 10; ++i) {
    ch = 'dd/MM/yyyy'.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      $appendNonNull(buf.data, ' ');
      $addPart(this$static, buf, 0);
      while (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 39) {
          $appendNonNull(buf.data, "'");
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        $appendNonNull(buf.data, String.fromCharCode(ch));
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      $appendNonNull(buf.data, String.fromCharCode(ch));
      count = $getNextCharCountInPattern(i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 39) {
        $appendNonNull(buf.data, "'");
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      $appendNonNull(buf.data, String.fromCharCode(ch));
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= text.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text.length && text.charCodeAt(pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    value < 24 && pos[0] - st <= 2?(offset *= 60):(offset = value % 100 + ~~(value / 100) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < text.length && $indexOf_2(' \t\r\n', fromCodePoint(text.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(buf, ch, count, adjustedDate, adjustedTime, timezone){
  var value, value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10;
  switch (ch) {
    case 71:
      value = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Before Christ', 'Anno Domini'])[value]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['BC', 'AD'])[value]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value_0 = adjustedTime.jsdate.getHours();
      value_0 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_0, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_1 = adjustedDate.jsdate.getDay();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_1]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_1]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_1]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[1]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[0]);
      break;
    case 104:
      value_2 = adjustedTime.jsdate.getHours() % 12;
      value_2 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_2, count);
      break;
    case 75:
      value_3 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value_3, count);
      break;
    case 72:
      value_4 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 99:
      value_5 = adjustedDate.jsdate.getDay();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_5]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_5]):count == 3?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_5]):$zeroPaddingNumber(buf, value_5, 1);
      break;
    case 76:
      value_6 = adjustedDate.jsdate.getMonth();
      count == 5?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_6]):count == 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_6]):count == 3?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_6]):$zeroPaddingNumber(buf, value_6 + 1, count);
      break;
    case 81:
      value_7 = ~~(adjustedDate.jsdate.getMonth() / 3);
      count < 4?$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Q1', 'Q2', 'Q3', 'Q4'])[value_7]):$append_5(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_7]);
      break;
    case 100:
      value_8 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value_8, count);
      break;
    case 109:
      value_9 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 115:
      value_10 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 122:
      count < 4?$append_5(buf, timezone.tzNames[0]):$append_5(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_5(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_5(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_5(buf, $getISOTimeZoneString(timezone)):$append_5(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $subParse(text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = part.text_0.charCodeAt(0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > text.length) {
        return false;
      }
      value = $parseInt(text.substr(0, start + digitCount - 0), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value;
      return true;
    case 77:
      return $subParseMonth(text, pos, cal, value, start);
    case 76:
      return $subParseStandaloneMonth(text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(text, pos, start, cal);
    case 97:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM']), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      cal.dayOfMonth = value;
      return true;
    case 83:
      if (value < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
    case 75:
    case 107:
    case 72:
      if (value < 0) {
        return false;
      }

      cal.hours = value;
      return true;
    case 109:
      if (value < 0) {
        return false;
      }

      cal.minutes = value;
      return true;
    case 115:
      if (value < 0) {
        return false;
      }

      cal.seconds = value;
      return true;
    case 90:
      if (start < text.length && text.charCodeAt(start) == 90) {
        ++pos[0];
        cal.tzOffset = 0;
        return true;
      }

    case 122:
    case 118:
      return $subParseTimeZoneInGMT(text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value = ~~((value + (a >> 1)) / a);
  }
  cal.milliseconds = value;
  return true;
}

function $subParseMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseStandaloneMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text, start, pos, cal){
  if (!(start < 0 || start >= text.length) && text.indexOf('GMT', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  if (!(start < 0 || start >= text.length) && text.indexOf('UTC', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  return $parseTimeZoneOffset(text, pos, cal);
}

function $subParseYear(text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    if (pos[0] >= text.length) {
      return false;
    }
    ch = text.charCodeAt(pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = new Date_1;
    defaultCenturyStartYear = date.jsdate.getFullYear() - 1900 + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value == ambiguousTwoDigitYear;
    value += ~~(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value;
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    value < b && ($appendNonNull(buf.data, '0') , buf);
    b *= 10;
  }
  $append_0(buf.data, value);
}

function DateTimeFormat_0(){
  this.patternParts = new ArrayList_0;
  this.pattern = 'dd/MM/yyyy';
  $parsePattern_0(this);
}

function getFormat(dtfi){
  $clinit_DateTimeFormat();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast(cache.get_1('dd/MM/yyyy'), Q$DateTimeFormat));
  if (!dtf) {
    dtf = new DateTimeFormat_0;
    dtfi == defaultDtfi && cache.put('dd/MM/yyyy', dtf);
  }
  return dtf;
}

defineSeed(294, 1, makeCastMap([Q$DateTimeFormat]), DateTimeFormat_0);
_.pattern = null;
var cache = null;
function DateTimeFormat$PatternPart_0(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineSeed(295, 1, makeCastMap([Q$DateTimeFormat$PatternPart]), DateTimeFormat$PatternPart_0);
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $fixDaylightSavings(this$static, hours){
  var badHours, copy, day, newTime, timeDiff, timeDiffHours, timeDiffMinutes;
  if (this$static.jsdate.getHours() % 24 != hours % 24) {
    copy = create(this$static.jsdate.getTime());
    $setDate(copy, copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = ~~(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = create_0(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, hours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      $setTime(this$static.jsdate, newTime.getTime());
    }
  }
}

function $setDate_0(this$static, date){
  var hours;
  hours = this$static.jsdate.getHours();
  $setDate(this$static.jsdate, date);
  $fixDaylightSavings(this$static, hours);
}

function $setMinutes_0(this$static, minutes){
  var hours;
  hours = this$static.jsdate.getHours() + ~~(minutes / 60);
  $setMinutes(this$static.jsdate, minutes);
  $fixDaylightSavings(this$static, hours);
}

function $setMonth_0(this$static, month){
  var hours;
  hours = this$static.jsdate.getHours();
  $setMonth(this$static.jsdate, month);
  $fixDaylightSavings(this$static, hours);
}

function $setSeconds_0(this$static, seconds){
  var hours;
  hours = this$static.jsdate.getHours() + ~~(seconds / 3600);
  $setSeconds(this$static.jsdate, seconds);
  $fixDaylightSavings(this$static, hours);
}

function $setYear(this$static, year){
  var hours;
  hours = this$static.jsdate.getHours();
  $setFullYear(this$static.jsdate, year + 1900);
  $fixDaylightSavings(this$static, hours);
}

function Date_1(){
  this.jsdate = new Date;
}

function Date_2(year, month, date){
  this.jsdate = new Date;
  $setFullYear_0(this.jsdate, year + 1900, month, date);
  $setHours_0(this.jsdate, 0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

defineSeed(297, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1, Date_2);
_.setDate_0 = function setDate(date){
  $setDate_0(this, date);
}
;
_.setHours_0 = function setHours(hours){
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes(minutes){
  $setMinutes_0(this, minutes);
}
;
_.setMonth_0 = function setMonth(month){
  $setMonth_0(this, month);
}
;
_.setSeconds_0 = function setSeconds(seconds){
  $setSeconds_0(this, seconds);
}
;
_.setTime_0 = function setTime(time){
  $setTime(this.jsdate, toDouble(time));
}
;
_.setYear = function setYear(year){
  $setYear(this, year);
}
;
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = date.jsdate.getDate();
  date.setDate_0(1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  if (this$static.dayOfMonth >= 0) {
    date.setDate_0(this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_2(date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 35);
    daysInCurrentMonth = 35 - tmp.jsdate.getDate();
    date.setDate_0(daysInCurrentMonth < orgDayOfMonth?daysInCurrentMonth:orgDayOfMonth);
  }
   else {
    date.setDate_0(orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = date.jsdate.getHours());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && date.setTime_0(add_0(mul(div_0(fromDouble(date.jsdate.getTime()), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds)));
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_1;
    defaultCenturyStart.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 - 80);
    lt(fromDouble(date.jsdate.getTime()), fromDouble(defaultCenturyStart.jsdate.getTime())) && date.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.jsdate.getMonth();
      date.setDate_0(date.jsdate.getDate() + adjustment);
      date.jsdate.getMonth() != orgMonth && date.setDate_0(date.jsdate.getDate() + (adjustment > 0?-7:7));
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = date.jsdate.getTimezoneOffset();
    date.setTime_0(add_0(fromDouble(date.jsdate.getTime()), fromInt((this$static.tzOffset - offset) * 60 * 1000)));
  }
  return true;
}

function DateRecord_0(){
  Date_1.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = -2147483648;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = -2147483648;
}

defineSeed(296, 297, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), DateRecord_0);
_.setHours_0 = function setHours_0(hours){
  this.hours = hours;
}
;
_.setMinutes_0 = function setMinutes_0(minutes){
  this.minutes = minutes;
}
;
_.setMonth_0 = function setMonth_0(month){
  this.month = month;
}
;
_.setSeconds_0 = function setSeconds_0(seconds){
  this.seconds = seconds;
}
;
_.setYear = function setYear_0(value){
  this.year = value;
}
;
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
function $setStyleName_0(this$static, style){
  setStyleName(this$static.element, style, true);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getPropertyString(elem, 'className');
  spaceIdx = $indexOf_2(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function $setCellVerticalAlignment(this$static, w, align){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && setStyleAttribute(td, 'verticalAlign', align.verticalAlignString);
}

function $resize(this$static){
  $resizeColumns(this$static, 3);
  $resizeRows(this$static, 5);
}

function $removeItem(this$static, index){
  $checkIndex(this$static, index);
  $selectRemoveOption(this$static.element, index);
}

function $clinit_CalendarUtil(){
  $clinit_CalendarUtil = nullMethod;
  $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
}

function $checkFrozen_0(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_1('The Date has been frozen');
  }
}

defineSeed(682, 297, makeCastMap([Q$Poser, Q$DatePoser, Q$Serializable, Q$Comparable, Q$Date]));
_.setDate_0 = function setDate_0(date){
  $checkFrozen_0(this);
  $setDate_0(this, date);
}
;
_.setHours_0 = function setHours_1(hours){
  $checkFrozen_0(this);
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes_1(minutes){
  $checkFrozen_0(this);
  $setMinutes_0(this, minutes);
}
;
_.setMonth_0 = function setMonth_1(month){
  $checkFrozen_0(this);
  $setMonth_0(this, month);
}
;
_.setSeconds_0 = function setSeconds_1(seconds){
  $checkFrozen_0(this);
  $setSeconds_0(this, seconds);
}
;
_.setTime_0 = function setTime_0(time){
  $checkFrozen_0(this);
  $setTime(this.jsdate, toDouble(time));
}
;
_.setYear = function setYear_1(year){
  $checkFrozen_0(this);
  $setYear(this, year);
}
;
function selectItemFromListByText(list, value){
  var i;
  for (i = 0; i < list.element.options.length; ++i) {
    $equals_5(($checkIndex(list, i) , $getOptionText(list.element.options[i])), value) && $setSelectedIndex(list.element, i);
  }
}

function ApplicationStep2CompletedEvent_0(){
  $clinit_ApplicationStep2CompletedEvent();
}

defineSeed(778, 235, {}, ApplicationStep2CompletedEvent_0);
_.dispatch_0 = function dispatch_40(handler){
  dynamicCast(handler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler).onApplicationStep2Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_41(){
  return TYPE_41;
}
;
function $calculatePrice(this$static, programmesCode, courseCode, txtJulyWeek, txtAugustWeek, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare){
  if ($equals_5(programmesCode, ($clinit_SummerCampSettingValues() , 'SUMMERCOURSE'))) {
    if ($equals_5(courseCode, 'LANGUE')) {
      $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses', ($clinit_Double() , new Double_0(item_summercourse20_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
      $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses', new Double_0(item_summercourse25_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
    }
    if ($equals_5(courseCode, 'LANGUECONVERSATION')) {
      $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation', ($clinit_Double() , new Double_0(item_summercourse205_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
      $equals_5(txtAugustWeek, '') || $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation', new Double_0(item_summercourse2510_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
    }
  }
  if ($equals_5(programmesCode, 'SUMMERCAMP')) {
    if ($equals_5(programmesCode, 'SUMMERCAMP')) {
      if (!optConfortPlusPrivate && !optConfortPrivate && !optStandardPrivate && !optConfortPlusShare && !optConfortShare && !optStandardShare) {
        return;
      }
    }
    if ($equals_5(courseCode, 'LANGUE')) {
      if (optConfortPlusPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Private Comfort+ room', ($clinit_Double() , new Double_0(item_summercourse20_confortplus_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Private Comfort+ room', new Double_0(item_summercourse25_confortplus_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Private Comfort room', ($clinit_Double() , new Double_0(item_summercourse20_confort_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Private Comfort room', new Double_0(item_summercourse25_confort_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optStandardPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Private Standard room', ($clinit_Double() , new Double_0(item_summercourse20_standard_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Private Standard room', new Double_0(item_summercourse25_standard_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortPlusShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Shared Confort+ room', ($clinit_Double() , new Double_0(item_summercourse20_confortplus_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Shared Comfort+ room', new Double_0(item_summercourse25_confortplus_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Shared Comfort room', ($clinit_Double() , new Double_0(item_summercourse20_confort_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Shared Comfort room', new Double_0(item_summercourse25_confort_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optStandardShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses - Shared Standard room', ($clinit_Double() , new Double_0(item_summercourse20_standard_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses - Shared Standard room', new Double_0(item_summercourse25_standard_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
    }
    if ($equals_5(courseCode, 'LANGUECONVERSATION')) {
      if (optConfortPlusPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Private Comfort+ room', ($clinit_Double() , new Double_0(item_summercourse205_confortplus_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Private Comfort+ room', new Double_0(item_summercourse2510_confortplus_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Private Comfort room', ($clinit_Double() , new Double_0(item_summercourse205_confort_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Private Comfort room', new Double_0(item_summercourse2510_confort_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optStandardPrivate) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Private Standard room', ($clinit_Double() , new Double_0(item_summercourse205_standard_private_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Private Standard room', new Double_0(item_summercourse2510_standard_private_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortPlusShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Shared Comfort+ room', ($clinit_Double() , new Double_0(item_summercourse205_confortplus_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Shared Comfort+ room', new Double_0(item_summercourse2510_confortplus_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optConfortShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Shared Comfort room', ($clinit_Double() , new Double_0(item_summercourse205_confort_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Shared Comfort room', new Double_0(item_summercourse2510_confort_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
      if (optStandardShare) {
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD002', 'Standard French/English courses & conversation - Shared Standard room', ($clinit_Double() , new Double_0(item_summercourse205_standard_share_amount.value_0 * __parseAndValidateInt(txtJulyWeek))))), null);
        $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0('CD003', 'Intensive French/English courses & conversation - Shared Standard room', new Double_0(item_summercourse2510_standard_share_amount.value_0 * __parseAndValidateInt(txtAugustWeek)))), null);
      }
    }
  }
}

function $editItemPrice(this$static, itemCode, selected){
  var price;
  price = 0;
  selected && (price = getItemPrice(itemCode).value_0);
  $doFire(this$static.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0(itemCode, getItemDescription(itemCode), ($clinit_Double() , new Double_0(price)))), null);
}

function $formCompleted_0(programmesCode, courseCode, startDate, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption){
  if ($equals_5(programmesCode, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Programme');
    return false;
  }
  if ($equals_5(courseCode, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' With or without conversation');
    return false;
  }
  if ($equals_5(languageOption, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Please choose a language option');
    return false;
  }
  if ($equals_5(startDate, '')) {
    alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Start date');
    return false;
  }
  if ($equals_5(programmesCode, ($clinit_SummerCampSettingValues() , 'SUMMERCAMP'))) {
    if (!optConfortPlusPrivate && !optConfortPrivate && !optStandardPrivate && !optConfortPlusShare && !optConfortShare && !optStandardShare) {
      alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Please choose a type of room');
      return false;
    }
    if (!optKeyDepositCHF && !optKeyDepositEuro && !optKeyDepositUSD) {
      alert_0(($clinit_NotificationTypes() , 'Missing input : ') + ' Please choose the currency of deposit money');
      return false;
    }
  }
  return true;
}

function $nextStep_1(this$static, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption){
  var rc, rf;
  if (!$formCompleted_0(programmesCode, courseCode, startDate, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption))
    return;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep2(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption), new ApplicationStep2Presenter$2_0(this$static));
}

function ApplicationStep2Presenter_0(eventBus, view, proxy, placeManager){
  $clinit_ApplicationStep2Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  this.placeManager = placeManager;
  dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView).setUiHandlers(this);
}

defineSeed(1191, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ApplicationItemSavedEvent$ApplicationItemSavedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep2Presenter, Q$ApplicationStep2UiHandlers]), ApplicationStep2Presenter_0);
_.onApplicationItemSaved = function onApplicationItemSaved_1(event_0){
  $onApplicationItemSaved_0(this);
}
;
_.onBind = function onBind_32(){
  $initializeUI(dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_59(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_31(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep2Presenter$1_0(this));
  $doFire(this.eventBus, new ApplicationItemSelectedEvent_0(new ApplicationItem_0(($clinit_SummerCampSettingValues() , 'CD001'), 'Application fee', item_applicationfee_amount)), null);
}
;
_.curUser = null;
_.placeManager = null;
function $onSuccess_138(this$static, app){
  $showApplicationDetails_1(dynamicCast(this$static.this$0.view, Q$ApplicationStep2Presenter$MyView), app);
}

function ApplicationStep2Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1192, 655, makeCastMap([Q$Receiver]), ApplicationStep2Presenter$1_0);
_.onFailure_0 = function onFailure_150(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_150(app){
  $onSuccess_138(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_139(this$static){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $doFire(this$static.this$0.eventBus, new ApplicationStep2CompletedEvent_0, null);
}

function ApplicationStep2Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1193, 655, makeCastMap([Q$Receiver]), ApplicationStep2Presenter$2_0);
_.onFailure_0 = function onFailure_151(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_151(saved){
  $onSuccess_139(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $changeLanguageOptions(this$static){
  $selectClear(this$static.lstLanguageOptions.element);
  $insertItem(this$static.lstLanguageOptions, '', '', -1);
  if ($equals_5($getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($clinit_SummerCampSettingValues() , 'LANGUE'))) {
    $insertItem(this$static.lstLanguageOptions, 'English Morning', 'LANGUAGEOPTION1', -1);
    $insertItem(this$static.lstLanguageOptions, 'French Morning', 'LANGUAGEOPTION4', -1);
  }
  if ($equals_5($getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), 'LANGUECONVERSATION')) {
    $insertItem(this$static.lstLanguageOptions, 'English Morning et English conversation on afternoon', 'LANGUAGEOPTION2', -1);
    $insertItem(this$static.lstLanguageOptions, 'English Morning et French conversation on afternoon', 'LANGUAGEOPTION3', -1);
    $insertItem(this$static.lstLanguageOptions, 'French Morning et French conversation on afternoon', 'LANGUAGEOPTION5', -1);
    $insertItem(this$static.lstLanguageOptions, 'French Morning et English conversation on afternoon', 'LANGUAGEOPTION6', -1);
  }
}

function $initializeUI(this$static){
  var beginDate, fmt, lastDate, maxWeek, today;
  fmt = ($clinit_DateTimeFormat() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));
  today = new Date_1;
  beginDate = $parse_2(fmt, ($clinit_SummerCampSettingValues() , '23/06/2014'));
  lastDate = $parse_2(fmt, '11/08/2014');
  maxWeek = 8;
  $insertItem(this$static.lstStartDate, '', '', -1);
  while (lt(fromDouble(beginDate.jsdate.getTime()), fromDouble(lastDate.jsdate.getTime()))) {
    $clinit_CalendarUtil();
    beginDate.setDate_0(beginDate.jsdate.getDate() + 7);
    if (lt(fromDouble(beginDate.jsdate.getTime()), fromDouble(today.jsdate.getTime())))
      continue;
    --maxWeek;
    $insertItem(this$static.lstStartDate, $format(fmt, beginDate, null), '' + maxWeek, -1);
  }
  $insertItem(this$static.lstProgrammes, 'Please choose', '', -1);
  $insertItem(this$static.lstProgrammes, 'Lemania Summer camp WITH Boarding', 'SUMMERCAMP', -1);
  $insertItem(this$static.lstProgrammes, 'Lemania Summer Course WITHOUT Boarding', 'SUMMERCOURSE', -1);
  $insertItem(this$static.lstCourses, 'Please choose', '', -1);
  $insertItem(this$static.lstCourses, 'French/English courses', 'LANGUE', -1);
  $insertItem(this$static.lstCourses, 'French/English courses & conversation', 'LANGUECONVERSATION', -1);
  $insertItem(this$static.lstWeekNumber, '', '', -1);
}

function $onChkPackAssuranceClick(this$static){
  $editItemPrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), ($clinit_SummerCampSettingValues() , 'CD004'), $getValue_0(this$static.chkPackAssurance).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onCmdNextStepClick_1(this$static){
  $nextStep_1(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_0(this$static.chkApplicaitonFee).value_0, $getValue_0(this$static.chkPackAssurance).value_0, $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex), $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex), $getPropertyString(this$static.txtJulyWeek.element, 'value'), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.chkContinueAfter).value_0, $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0, $getValue_0(this$static.optKeyDepositCHF).value_0, $getValue_0(this$static.optKeyDepositEuro).value_0, $getValue_0(this$static.optKeyDepositUSD).value_0, $getValue_2(this$static.lstLanguageOptions, this$static.lstLanguageOptions.element.selectedIndex));
}

function $onLstCoursesChange(this$static){
  $changeLanguageOptions(this$static);
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onLstProgrammesChange(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onLstStartDateChange(this$static, event_0){
  var weekNumber;
  if ($equals_5($getValue_2(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex), ''))
    return;
  $setText_1(this$static.lblStartDate, $getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex));
  $selectClear(this$static.lstWeekNumber.element);
  weekNumber = __parseAndValidateInt($getValue_2(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex));
  while (weekNumber > 0) {
    $insertItem(this$static.lstWeekNumber, '' + weekNumber, '' + weekNumber, -1);
    --weekNumber;
  }
  __parseAndValidateInt($getValue_2(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex)) > ($clinit_SummerCampSettingValues() , 2) && $removeItem(this$static.lstWeekNumber, this$static.lstWeekNumber.element.options.length - 1);
  $onLstWeekNumberChange(this$static);
  !!event_0 && $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onLstWeekNumberChange(this$static){
  var maxJuly, weekNumber;
  maxJuly = __parseAndValidateInt($getValue_2(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex)) - 2;
  weekNumber = __parseAndValidateInt($getValue_2(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex));
  if (maxJuly > 0) {
    if (weekNumber - maxJuly > 0) {
      $setText(this$static.txtJulyWeek, '' + maxJuly);
      $setText(this$static.txtAugustWeek, '' + (weekNumber - maxJuly));
    }
     else {
      $setText(this$static.txtJulyWeek, '' + weekNumber);
      $setText(this$static.txtAugustWeek, '0');
    }
  }
   else {
    $setText(this$static.txtJulyWeek, '0');
    $setText(this$static.txtAugustWeek, '' + weekNumber);
  }
  $setText_1(this$static.lblDuration, $getValue_2(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex));
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptConfortPlusPrivateClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptConfortPlusShareClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptConfortPrivateClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptConfortShareClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptStandardPrivateClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $onOptStandardShareClick(this$static){
  $calculatePrice(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_2(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_2(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), ($getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex) , $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex) , $getPropertyString(this$static.txtJulyWeek.element, 'value')), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0);
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}

function $showApplicationDetails_1(this$static, app){
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setText_1(this$static.lblApplicationInfo, app.getEmailAddress() + ' - ' + app.getApplicationID());
  $setValue_1(this$static.chkApplicaitonFee, ($clinit_Boolean() , app.isChkApplicationFee()?TRUE_1:FALSE_1));
  $setValue_1(this$static.chkPackAssurance, app.isChkPackAssurance()?TRUE_1:FALSE_1);
  selectItemFromList(this$static.lstProgrammes, app.getProgrammesCode());
  selectItemFromList(this$static.lstCourses, app.getCourseCode());
  $onLstCoursesChange(this$static);
  selectItemFromList(this$static.lstLanguageOptions, app.getLanguageOption());
  selectItemFromListByText(this$static.lstStartDate, app.getStartDate());
  $onLstStartDateChange(this$static, null);
  selectItemFromListByText(this$static.lstWeekNumber, app.getWeekNumber());
  $setText(this$static.txtJulyWeek, app.getTxtJulyWeek());
  $setText(this$static.txtAugustWeek, app.getTxtAugustWeek());
  $setValue_1(this$static.chkContinueAfter, app.isChkContinueAfter()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optConfortPlusPrivate, app.isOptConfortPlusPrivate()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optConfortPrivate, app.isOptConfortPrivate()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optStandardPrivate, app.isOptStandardPrivate()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optConfortPlusShare, app.isOptConfortPlusShare()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optConfortShare, app.isOptConfortShare()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optStandardShare, app.isOptStandardShare()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optKeyDepositCHF, app.isOptKeyDepositCHF()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optKeyDepositEuro, app.isOptKeyDepositEuro()?TRUE_1:FALSE_1);
  $setValue_1(this$static.optKeyDepositUSD, app.isOptKeyDepositUSD()?TRUE_1:FALSE_1);
  $setText_1(this$static.lblStartDate, app.getStartDate());
  $setText_1(this$static.lblDuration, app.getWeekNumber());
}

function ApplicationStep2View_0(){
  $initWidget_0(this, $build_main_3(new ApplicationStep2View_BinderImpl$Widgets_0(this)));
}

defineSeed(1201, 720, makeCastMap([Q$IsWidget, Q$ApplicationStep2Presenter$MyView]), ApplicationStep2View_0);
_.setInSlot = function setInSlot_5(slot, content_0){
  slot === ($clinit_ApplicationStep2Presenter() , SLOT_ApplicationStep2)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.chkApplicaitonFee = null;
_.chkContinueAfter = null;
_.chkPackAssurance = null;
_.lblApplicationInfo = null;
_.lblDuration = null;
_.lblStartDate = null;
_.lblTotalAmount = null;
_.lstCourses = null;
_.lstLanguageOptions = null;
_.lstProgrammes = null;
_.lstStartDate = null;
_.lstWeekNumber = null;
_.main = null;
_.optConfortPlusPrivate = null;
_.optConfortPlusShare = null;
_.optConfortPrivate = null;
_.optConfortShare = null;
_.optKeyDepositCHF = null;
_.optKeyDepositEuro = null;
_.optKeyDepositUSD = null;
_.optStandardPrivate = null;
_.optStandardShare = null;
_.tblItems = null;
_.txtAugustWeek = null;
_.txtJulyWeek = null;
function ApplicationStep2View_BinderImpl_0(){
}

defineSeed(1202, 1, {}, ApplicationStep2View_BinderImpl_0);
function $build_main_3(this$static){
  var main, f_VerticalPanel1, f_Label2, f_HorizontalPanel3, lblApplicationInfo, f_Label4, f_FlowPanel5, f_HorizontalPanel6, f_VerticalPanel47, f_VerticalPanel7, f_Label8, f_Label9, chkApplicaitonFee, chkPackAssurance, f_Label10, f_Label11, f_Label12, f_Grid13, f_Label14, lstProgrammes, f_Label15, lstCourses, f_Label16, lstLanguageOptions, chkContinueAfter, f_Label29, f_Label30, f_Grid31, f_Label32, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, f_Label33, optConfortPlusShare, optConfortShare, optStandardShare, f_Label34, f_Label35, f_Label36, f_Label37, f_Grid38, f_Label39, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, f_VerticalPanel40, f_Label41, f_Grid42, f_Label43, lblStartDate, f_Label44, lblDuration, tblItems, f_HorizontalPanel45, f_Label46, lblTotalAmount, f_HorizontalPanel48, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'CHOICE OF PROGRAMME', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_HorizontalPanel3 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel3, (lblApplicationInfo = new Label_0 , $setTextOrHtml(lblApplicationInfo.directionalTextHelper, 'Application ID', false) , $updateHorizontalAlignment(lblApplicationInfo) , this$static.owner.lblApplicationInfo = lblApplicationInfo , lblApplicationInfo)) , $add_9(f_HorizontalPanel3, (f_Label4 = new Label_0 , $setAutoHorizontalAlignment(f_Label4, ALIGN_RIGHT) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Step 2 of 5', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_HorizontalPanel3.element.style['width'] = '100%' , f_HorizontalPanel3.table['cellSpacing'] = 5 , f_HorizontalPanel3)) , $add_11(f_VerticalPanel1, (f_FlowPanel5 = new FlowPanel_0 , $add_7(f_FlowPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel6, (f_VerticalPanel7 = new VerticalPanel_0 , $add_11(f_VerticalPanel7, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label8.directionalTextHelper, 'Application', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel7, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_11(f_VerticalPanel7, (chkApplicaitonFee = new CheckBox_0 , chkApplicaitonFee.inputElem.disabled = true , $setStyleName_0(chkApplicaitonFee, getStylePrimaryName(chkApplicaitonFee.element) + '-disabled') , $setTextOrHtml(chkApplicaitonFee.directionalTextHelper, "Frais d'inscription, CHF 100.-", false) , $setValue_1(chkApplicaitonFee, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkApplicaitonFee = chkApplicaitonFee , chkApplicaitonFee)) , $add_11(f_VerticalPanel7, (chkPackAssurance = new CheckBox_0 , $setTextOrHtml(chkPackAssurance.directionalTextHelper, 'Pack Assurance sant\xE9 CHF 190.- (obligatoire pour les internes sauf les r\xE9sidents en Suisse)', false) , $addDomHandler(chkPackAssurance, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.chkPackAssurance = chkPackAssurance , chkPackAssurance)) , $add_11(f_VerticalPanel7, (f_Label10 = new Label_0 , f_Label10.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_11(f_VerticalPanel7, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label11.directionalTextHelper, 'Programmes', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_11(f_VerticalPanel7, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_11(f_VerticalPanel7, (f_Grid13 = new Grid_0 , $resizeColumns(f_Grid13, 2) , $resizeRows(f_Grid13, 3) , $setWidget_1(f_Grid13, 0, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Programme', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid13, 0, 1, (lstProgrammes = new ListBox_0 , $addDomHandler(lstProgrammes, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid13, 1, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'With or without conversation courses', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid13, 1, 1, (lstCourses = new ListBox_0 , $addDomHandler(lstCourses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.lstCourses = lstCourses , lstCourses)) , $setWidget_1(f_Grid13, 2, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Language choices', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid13, 2, 1, (lstLanguageOptions = new ListBox_0 , this$static.owner.lstLanguageOptions = lstLanguageOptions , lstLanguageOptions)) , f_Grid13.element.style['width'] = '100%' , f_Grid13)) , $add_11(f_VerticalPanel7, this$static.f_Grid17) , $setCellVerticalAlignment(f_VerticalPanel7, this$static.f_Grid17, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_11(f_VerticalPanel7, (chkContinueAfter = new CheckBox_0 , $setTextOrHtml(chkContinueAfter.directionalTextHelper, 'I would like to continue my study after the summer programme', false) , $addDomHandler(chkContinueAfter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, TYPE_0) , this$static.owner.chkContinueAfter = chkContinueAfter , chkContinueAfter)) , $add_11(f_VerticalPanel7, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label29.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_11(f_VerticalPanel7, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label30.directionalTextHelper, 'Accomodation - Boarding house', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $add_11(f_VerticalPanel7, (f_Grid31 = new Grid_0 , $resizeColumns(f_Grid31, 4) , $resizeRows(f_Grid31, 2) , $setWidget_1(f_Grid31, 0, 0, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, 'Private room', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $setWidget_1(f_Grid31, 0, 1, (optConfortPlusPrivate = new RadioButton_0('new name') , $setTextOrHtml(optConfortPlusPrivate.directionalTextHelper, 'Comfort plus', false) , $addDomHandler(optConfortPlusPrivate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, TYPE_0) , this$static.owner.optConfortPlusPrivate = optConfortPlusPrivate , optConfortPlusPrivate)) , $setWidget_1(f_Grid31, 0, 2, (optConfortPrivate = new RadioButton_0('new name') , $setTextOrHtml(optConfortPrivate.directionalTextHelper, 'Comfort', false) , $addDomHandler(optConfortPrivate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, TYPE_0) , this$static.owner.optConfortPrivate = optConfortPrivate , optConfortPrivate)) , $setWidget_1(f_Grid31, 0, 3, (optStandardPrivate = new RadioButton_0('new name') , $setTextOrHtml(optStandardPrivate.directionalTextHelper, 'Standard', false) , $addDomHandler(optStandardPrivate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, TYPE_0) , this$static.owner.optStandardPrivate = optStandardPrivate , optStandardPrivate)) , $setWidget_1(f_Grid31, 1, 0, (f_Label33 = new Label_0 , $setTextOrHtml(f_Label33.directionalTextHelper, 'Shared room (two twin beds)', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $setWidget_1(f_Grid31, 1, 1, (optConfortPlusShare = new RadioButton_0('new name') , $setTextOrHtml(optConfortPlusShare.directionalTextHelper, 'Comfort plus', false) , $addDomHandler(optConfortPlusShare, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, TYPE_0) , this$static.owner.optConfortPlusShare = optConfortPlusShare , optConfortPlusShare)) , $setWidget_1(f_Grid31, 1, 2, (optConfortShare = new RadioButton_0('new name') , $setTextOrHtml(optConfortShare.directionalTextHelper, 'Comfort', false) , $addDomHandler(optConfortShare, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, TYPE_0) , this$static.owner.optConfortShare = optConfortShare , optConfortShare)) , $setWidget_1(f_Grid31, 1, 3, (optStandardShare = new RadioButton_0('new name') , $setTextOrHtml(optStandardShare.directionalTextHelper, 'Standard', false) , $addDomHandler(optStandardShare, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12, TYPE_0) , this$static.owner.optStandardShare = optStandardShare , optStandardShare)) , f_Grid31.element.style['width'] = '100%' , f_Grid31)) , $add_11(f_VerticalPanel7, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, 'Early booking is recommended as there is a limited number of boarding places. Students must arrive on Sundy afternoon and leave on Saturday morning.', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $add_11(f_VerticalPanel7, (f_Label35 = new Label_0 , f_Label35.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label35.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label35) , f_Label35)) , $add_11(f_VerticalPanel7, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label36.directionalTextHelper, 'Key deposit', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_11(f_VerticalPanel7, (f_Label37 = new Label_0 , $setTextOrHtml(f_Label37.directionalTextHelper, 'Students must pay a deposit for their room key upon arrival. This amount will be refunded when the key is returned on their departure. There will be no refund if the key is lost.', false) , $updateHorizontalAlignment(f_Label37) , f_Label37)) , $add_11(f_VerticalPanel7, (f_Grid38 = new Grid_0 , $resizeColumns(f_Grid38, 4) , $resizeRows(f_Grid38, 1) , $setWidget_1(f_Grid38, 0, 0, (f_Label39 = new Label_0 , $setTextOrHtml(f_Label39.directionalTextHelper, 'Choice of deposit currency', false) , $updateHorizontalAlignment(f_Label39) , f_Label39)) , $setWidget_1(f_Grid38, 0, 1, (optKeyDepositCHF = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositCHF.directionalTextHelper, 'CHF 100.-', false) , $addDomHandler(optKeyDepositCHF, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15, TYPE_0) , this$static.owner.optKeyDepositCHF = optKeyDepositCHF , optKeyDepositCHF)) , $setWidget_1(f_Grid38, 0, 2, (optKeyDepositEuro = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositEuro.directionalTextHelper, '\u20AC 100.-', false) , $addDomHandler(optKeyDepositEuro, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16, TYPE_0) , this$static.owner.optKeyDepositEuro = optKeyDepositEuro , optKeyDepositEuro)) , $setWidget_1(f_Grid38, 0, 3, (optKeyDepositUSD = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositUSD.directionalTextHelper, 'US$ 100.-', false) , $addDomHandler(optKeyDepositUSD, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17, TYPE_0) , this$static.owner.optKeyDepositUSD = optKeyDepositUSD , optKeyDepositUSD)) , f_Grid38.element.style['width'] = '100%' , f_Grid38)) , f_VerticalPanel7.element.style['width'] = '100%' , f_VerticalPanel7)) , $add_9(f_HorizontalPanel6, (f_VerticalPanel40 = new VerticalPanel_0 , $add_11(f_VerticalPanel40, (f_Label41 = new Label_0 , f_Label41.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label41.directionalTextHelper, 'Selected items', false) , $updateHorizontalAlignment(f_Label41) , f_Label41)) , $add_11(f_VerticalPanel40, (f_Grid42 = new Grid_0 , $resizeColumns(f_Grid42, 2) , $resizeRows(f_Grid42, 2) , $setWidget_1(f_Grid42, 0, 0, (f_Label43 = new Label_0 , $setTextOrHtml(f_Label43.directionalTextHelper, 'Start date:', false) , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $setWidget_1(f_Grid42, 0, 1, (lblStartDate = new Label_0 , $setTextOrHtml(lblStartDate.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblStartDate) , this$static.owner.lblStartDate = lblStartDate , lblStartDate)) , $setWidget_1(f_Grid42, 1, 0, (f_Label44 = new Label_0 , $setTextOrHtml(f_Label44.directionalTextHelper, 'Duration (week):', false) , $updateHorizontalAlignment(f_Label44) , f_Label44)) , $setWidget_1(f_Grid42, 1, 1, (lblDuration = new Label_0 , $setTextOrHtml(lblDuration.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblDuration) , this$static.owner.lblDuration = lblDuration , lblDuration)) , f_Grid42.element.style['width'] = '100%' , f_Grid42)) , $add_11(f_VerticalPanel40, (tblItems = new FlexTable_0 , tblItems.element.style['width'] = '100%' , this$static.owner.tblItems = tblItems , tblItems)) , $add_11(f_VerticalPanel40, (f_HorizontalPanel45 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel45, (f_Label46 = new Label_0 , f_Label46.element['className'] = 'lablel_TotalAmount' , $setTextOrHtml(f_Label46.directionalTextHelper, 'Total (CHF)', false) , $updateHorizontalAlignment(f_Label46) , f_Label46)) , $add_9(f_HorizontalPanel45, (lblTotalAmount = new Label_0 , lblTotalAmount.element['className'] = 'lablel_TotalAmount' , $setAutoHorizontalAlignment(lblTotalAmount, ALIGN_RIGHT) , $setTextOrHtml(lblTotalAmount.directionalTextHelper, '.', false) , $updateHorizontalAlignment(lblTotalAmount) , this$static.owner.lblTotalAmount = lblTotalAmount , lblTotalAmount)) , f_HorizontalPanel45.element.style['width'] = '100%' , f_HorizontalPanel45)) , f_VerticalPanel40.element['className'] = 'subSection' , f_VerticalPanel40.element.style['width'] = '250px' , f_VerticalPanel40.table['cellSpacing'] = 2 , f_VerticalPanel40)) , f_HorizontalPanel6.element.style['width'] = '100%' , f_HorizontalPanel6.table['cellSpacing'] = 10 , f_HorizontalPanel6)) , $add_7(f_FlowPanel5, (f_VerticalPanel47 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel47, ALIGN_RIGHT) , $add_11(f_VerticalPanel47, (f_HorizontalPanel48 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel48, ALIGN_RIGHT) , $add_9(f_HorizontalPanel48, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pr\xE9c\xE9dant') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $setInnerText(cmdPreviousStep.element, 'Previous') , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_0) , cmdPreviousStep)) , $add_9(f_HorizontalPanel48, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Next Step') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $setInnerText(cmdNextStep.element, 'Save & Continue') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel48.element.style['width'] = '35%' , f_HorizontalPanel48.table['cellSpacing'] = 10 , f_HorizontalPanel48)) , f_VerticalPanel47.element.style['width'] = '100%' , f_VerticalPanel47)) , f_FlowPanel5.element.style['width'] = '900px' , f_FlowPanel5)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep2View_BinderImpl$Widgets_0(owner){
  var f_Label18, lstStartDate, f_Label19, f_Label20, lstWeekNumber, f_Label21, f_Label22, f_Label23, f_Label24, f_Label25, txtJulyWeek, txtAugustWeek, f_Label26, f_Label27, f_Label28;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep2View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep2View_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationStep2View_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationStep2View_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ApplicationStep2View_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ApplicationStep2View_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ApplicationStep2View_BinderImpl$Widgets$7_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new ApplicationStep2View_BinderImpl$Widgets$8_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new ApplicationStep2View_BinderImpl$Widgets$9_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new ApplicationStep2View_BinderImpl$Widgets$10_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new ApplicationStep2View_BinderImpl$Widgets$11_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new ApplicationStep2View_BinderImpl$Widgets$12_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13 = new ApplicationStep2View_BinderImpl$Widgets$13_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14 = new ApplicationStep2View_BinderImpl$Widgets$14_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15 = new ApplicationStep2View_BinderImpl$Widgets$15_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16 = new ApplicationStep2View_BinderImpl$Widgets$16_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17 = new ApplicationStep2View_BinderImpl$Widgets$17_0(this);
  this.owner = owner;
  this.f_Grid17 = new Grid_0;
  $resize(this.f_Grid17);
  $setWidget_1(this.f_Grid17, 0, 0, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Starting date', false) , $updateHorizontalAlignment(f_Label18) , f_Label18));
  $setWidget_1(this.f_Grid17, 0, 1, (lstStartDate = new ListBox_0 , $addDomHandler(lstStartDate, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.owner.lstStartDate = lstStartDate , lstStartDate));
  $setWidget_1(this.f_Grid17, 0, 2, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, '(dd/MM/yyyy)', false) , $updateHorizontalAlignment(f_Label19) , f_Label19));
  $setWidget_1(this.f_Grid17, 1, 0, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'Number of weeks', false) , $updateHorizontalAlignment(f_Label20) , f_Label20));
  $setWidget_1(this.f_Grid17, 1, 1, (lstWeekNumber = new ListBox_0 , $addDomHandler(lstWeekNumber, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this.owner.lstWeekNumber = lstWeekNumber , lstWeekNumber));
  $setWidget_1(this.f_Grid17, 1, 2, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Reccomandation : au moins 2 semaines', false) , $updateHorizontalAlignment(f_Label21) , f_Label21));
  $setWidget_1(this.f_Grid17, 2, 0, (f_Label22 = new Label_0 , f_Label22.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label22.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label22) , f_Label22));
  $setWidget_1(this.f_Grid17, 2, 1, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'July', false) , $updateHorizontalAlignment(f_Label23) , f_Label23));
  $setWidget_1(this.f_Grid17, 2, 2, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'August', false) , $updateHorizontalAlignment(f_Label24) , f_Label24));
  $setWidget_1(this.f_Grid17, 3, 0, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label25.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label25) , f_Label25));
  $setWidget_1(this.f_Grid17, 3, 1, (txtJulyWeek = new TextBox_0 , txtJulyWeek.element['className'] = 'sis_textbox_readonly' , txtJulyWeek.element['readOnly'] = true , $setStyleName_0(txtJulyWeek, getStylePrimaryName(txtJulyWeek.element) + '-readonly') , txtJulyWeek.element.style['width'] = '100px' , this.owner.txtJulyWeek = txtJulyWeek , txtJulyWeek));
  $setWidget_1(this.f_Grid17, 3, 2, (txtAugustWeek = new TextBox_0 , txtAugustWeek.element['className'] = 'sis_textbox_readonly' , txtAugustWeek.element['readOnly'] = true , $setStyleName_0(txtAugustWeek, getStylePrimaryName(txtAugustWeek.element) + '-readonly') , txtAugustWeek.element.style['width'] = '100px' , this.owner.txtAugustWeek = txtAugustWeek , txtAugustWeek));
  $setWidget_1(this.f_Grid17, 4, 0, (f_Label26 = new Label_0 , f_Label26.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label26.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label26) , f_Label26));
  $setWidget_1(this.f_Grid17, 4, 1, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, '(Standard course)', false) , $updateHorizontalAlignment(f_Label27) , f_Label27));
  $setWidget_1(this.f_Grid17, 4, 2, (f_Label28 = new Label_0 , $setTextOrHtml(f_Label28.directionalTextHelper, '(Intensive course)', false) , $updateHorizontalAlignment(f_Label28) , f_Label28));
  $setWidth(this.f_Grid17, '100%');
  $setCellPadding(this.f_Grid17, 2);
}

defineSeed(1203, 1, {}, ApplicationStep2View_BinderImpl$Widgets_0);
_.f_Grid17 = null;
_.owner = null;
function ApplicationStep2View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1204, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_8(event_0){
  $onCmdNextStepClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$10_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1205, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$10_0);
_.onClick = function onClick_9(event_0){
  $onOptConfortPlusShareClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$11_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1206, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$11_0);
_.onClick = function onClick_10(event_0){
  $onOptConfortShareClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$12_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1207, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$12_0);
_.onClick = function onClick_11(event_0){
  $onOptStandardShareClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$13_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1208, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$13_0);
_.onClick = function onClick_12(event_0){
  $onChkPackAssuranceClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$14_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1209, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$14_0);
_.onClick = function onClick_13(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$15_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1210, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$15_0);
_.onClick = function onClick_14(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$16_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1211, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$16_0);
_.onClick = function onClick_15(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$17_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1212, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$17_0);
_.onClick = function onClick_16(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).placeManager, ($clinit_NotificationTypes() , 'UNSAVED MODIFICATIONS - Click on the button Save & Continue before leaving this page.'));
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1213, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$2_0);
_.onChange = function onChange_0(event_0){
  $onLstStartDateChange(this.this$1.owner, event_0);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1214, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$3_0);
_.onChange = function onChange_1(event_0){
  $onLstWeekNumberChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1215, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$4_0);
_.onClick = function onClick_17(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1216, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$5_0);
_.onChange = function onChange_2(event_0){
  $onLstProgrammesChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1217, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$6_0);
_.onChange = function onChange_3(event_0){
  $onLstCoursesChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1218, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$7_0);
_.onClick = function onClick_18(event_0){
  $onOptConfortPlusPrivateClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$8_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1219, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$8_0);
_.onClick = function onClick_19(event_0){
  $onOptConfortPrivateClick(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$9_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1220, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$9_0);
_.onClick = function onClick_20(event_0){
  $onOptStandardPrivateClick(this.this$1.owner);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$) {
    result = new ApplicationStep2Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$) {
    result = new ApplicationStep2View_0(new ApplicationStep2View_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$;
}

defineSeed(1224, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_153(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1389, 715, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
defineSeed(1391, 740, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$8_0(this.eventBus));
}
;
function $success_67(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$8$1_0);
}

function MainPagePresenterMyProxyImpl$8_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1416, 729, {}, MainPagePresenterMyProxyImpl$8_0);
_.success = function success_69(presenter){
  $success_67(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$8$1_0(){
}

defineSeed(1417, 1, {}, MainPagePresenterMyProxyImpl$8$1_0);
_.execute_0 = function execute_96(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
function $saveStep2(this$static, emailAddress, appId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$10X_0(this$static, emailAddress, appId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, languageOption);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$10X_0(this$0, val$emailAddress, val$appId, val$chkApplicaitonFee, val$chkPackAssurance, val$programmesCode, val$courseCode, val$startDate, val$weekNumber, val$txtJulyWeek, val$txtAugustWeek, val$chkContinueAfter, val$optConfortPlusPrivate, val$optConfortPrivate, val$optStandardPrivate, val$optConfortPlusShare, val$optConfortShare, val$optStandardShare, val$optKeyDepositCHF, val$optKeyDepositEuro, val$optKeyDepositUSD, val$languageOption){
  this.val$emailAddress = val$emailAddress;
  this.val$appId = val$appId;
  this.val$chkApplicaitonFee = val$chkApplicaitonFee;
  this.val$chkPackAssurance = val$chkPackAssurance;
  this.val$programmesCode = val$programmesCode;
  this.val$courseCode = val$courseCode;
  this.val$startDate = val$startDate;
  this.val$weekNumber = val$weekNumber;
  this.val$txtJulyWeek = val$txtJulyWeek;
  this.val$txtAugustWeek = val$txtAugustWeek;
  this.val$chkContinueAfter = val$chkContinueAfter;
  this.val$optConfortPlusPrivate = val$optConfortPlusPrivate;
  this.val$optConfortPrivate = val$optConfortPrivate;
  this.val$optStandardPrivate = val$optStandardPrivate;
  this.val$optConfortPlusShare = val$optConfortPlusShare;
  this.val$optConfortShare = val$optConfortShare;
  this.val$optStandardShare = val$optStandardShare;
  this.val$optKeyDepositCHF = val$optKeyDepositCHF;
  this.val$optKeyDepositEuro = val$optKeyDepositEuro;
  this.val$optKeyDepositUSD = val$optKeyDepositUSD;
  this.val$languageOption = val$languageOption;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1817, 659, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('qY3pi4BQrIcF6S$$Hkc6tPHRUF0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, ($clinit_Boolean() , this.val$chkApplicaitonFee?TRUE_1:FALSE_1), this.val$chkPackAssurance?TRUE_1:FALSE_1, this.val$programmesCode, this.val$courseCode, this.val$startDate, this.val$weekNumber, this.val$txtJulyWeek, this.val$txtAugustWeek, this.val$chkContinueAfter?TRUE_1:FALSE_1, this.val$optConfortPlusPrivate?TRUE_1:FALSE_1, this.val$optConfortPrivate?TRUE_1:FALSE_1, this.val$optStandardPrivate?TRUE_1:FALSE_1, this.val$optConfortPlusShare?TRUE_1:FALSE_1, this.val$optConfortShare?TRUE_1:FALSE_1, this.val$optStandardShare?TRUE_1:FALSE_1, this.val$optKeyDepositCHF?TRUE_1:FALSE_1, this.val$optKeyDepositEuro?TRUE_1:FALSE_1, this.val$optKeyDepositUSD?TRUE_1:FALSE_1, this.val$languageOption]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$chkApplicaitonFee = false;
_.val$chkContinueAfter = false;
_.val$chkPackAssurance = false;
_.val$courseCode = null;
_.val$emailAddress = null;
_.val$languageOption = null;
_.val$optConfortPlusPrivate = false;
_.val$optConfortPlusShare = false;
_.val$optConfortPrivate = false;
_.val$optConfortShare = false;
_.val$optKeyDepositCHF = false;
_.val$optKeyDepositEuro = false;
_.val$optKeyDepositUSD = false;
_.val$optStandardPrivate = false;
_.val$optStandardShare = false;
_.val$programmesCode = null;
_.val$startDate = null;
_.val$txtAugustWeek = null;
_.val$txtJulyWeek = null;
_.val$weekNumber = null;
function valueOf_5(x){
  return String.fromCharCode.apply(null, x);
}

function $append_6(this$static, x){
  $appendNonNull(this$static.data, valueOf_5(x));
  return this$static;
}

function StringBuffer_1(){
  $$init_30(this);
}

defineSeed(2026, 1, makeCastMap([Q$CharSequence]), StringBuffer_1);
var Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter', 1191), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter$1', 1192), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter$2', 1193), Lcom_lemania_eprospects_client_event_ApplicationStep2CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep2CompletedEvent', 778), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8', 1416), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8$1', 1417), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View', 1201), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl', 1202), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets', 1203), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$1', 1204), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$2', 1213), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$3', 1214), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$4', 1215), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$5', 1216), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$6', 1217), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$7', 1218), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$8', 1219), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$9', 1220), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$10', 1205), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$11', 1206), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$12', 1207), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$13_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$13', 1208), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$14_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$14', 1209), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$15_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$15', 1210), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$16_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$16', 1211), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$17_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$17', 1212), Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat', 294), Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat$PatternPart', 295), Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl.', 'DateRecord', 296), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone', 290), Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DefaultDateTimeFormatInfo', 286), Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultDateTimeFormatInfo', 285), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl', 293), Lcom_lemania_eprospects_shared_applicationform_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$10X_2_classLit = createForClass('com.lemania.eprospects.shared.applicationform.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$10X', 1817);
$entry(onLoad)(5);
