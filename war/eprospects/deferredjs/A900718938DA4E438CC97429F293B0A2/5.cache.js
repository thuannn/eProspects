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

defineSeed(289, 1, {}, TimeZone_0);
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function DateTimeFormatInfoImpl_0(){
}

defineSeed(290, 285, {}, DateTimeFormatInfoImpl_0);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = nullMethod;
  cache = new HashMap_0;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.impl.string.length > 0) {
    $add_19(this$static.patternParts, new DateTimeFormat$PatternPart_0(buf.impl.string, count));
    oldLength = buf.impl.string.length;
    0 < oldLength?($replace(buf.impl, 0, oldLength, '') , buf):0 > oldLength && $append_7(buf, initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, -oldLength, 1));
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
        toAppendTo.impl.string += "'";
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
        $append_6(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      $appendNonNull(toAppendTo.impl, String.fromCharCode(ch));
      ++i;
    }
  }
  return toAppendTo.impl.string;
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
    $appendNonNull(buf.impl, String.fromCharCode(48 + value & 65535));
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
      $append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value]);
      break;
    case 4:
      $append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value]);
      break;
    case 3:
      $append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value]);
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
      $append_0(buf.impl, value);
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

function $parse(this$static, text, date){
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

function $parse_0(this$static, text){
  var charsConsumed, curDate, date;
  curDate = new Date_1;
  date = new Date_2(curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse(this$static, text, date);
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

function $parsePattern(this$static){
  var buf, ch, count, i, inQuote;
  buf = new StringBuffer_1;
  inQuote = false;
  for (i = 0; i < 10; ++i) {
    ch = 'dd/MM/yyyy'.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      buf.impl.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 39) {
          buf.impl.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        $appendNonNull(buf.impl, String.fromCharCode(ch));
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      $appendNonNull(buf.impl, String.fromCharCode(ch));
      count = $getNextCharCountInPattern(i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < 10 && 'dd/MM/yyyy'.charCodeAt(i + 1) == 39) {
        buf.impl.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      $appendNonNull(buf.impl, String.fromCharCode(ch));
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
      count >= 4?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Before Christ', 'Anno Domini'])[value]):$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['BC', 'AD'])[value]);
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
      count == 5?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_1]):count == 4?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_1]):$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_1]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[1]):$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['AM', 'PM'])[0]);
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
      count == 5?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_5]):count == 4?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_5]):count == 3?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_5]):$zeroPaddingNumber(buf, value_5, 1);
      break;
    case 76:
      value_6 = adjustedDate.jsdate.getMonth();
      count == 5?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_6]):count == 4?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_6]):count == 3?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_6]):$zeroPaddingNumber(buf, value_6 + 1, count);
      break;
    case 81:
      value_7 = ~~(adjustedDate.jsdate.getMonth() / 3);
      count < 4?$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Q1', 'Q2', 'Q3', 'Q4'])[value_7]):$append_6(buf, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_7]);
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
      count < 4?$append_6(buf, timezone.tzNames[0]):$append_6(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_6(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_6(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_6(buf, $getISOTimeZoneString(timezone)):$append_6(buf, composeGMTString(timezone.standardOffset));
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
    value = ~~((value + (~~a >> 1)) / a);
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
    value < b && (buf.impl.string += '0' , buf);
    b *= 10;
  }
  $append_0(buf.impl, value);
}

function DateTimeFormat_0(){
  this.patternParts = new ArrayList_0;
  this.pattern = 'dd/MM/yyyy';
  $parsePattern(this);
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

defineSeed(291, 1, makeCastMap([Q$DateTimeFormat]), DateTimeFormat_0);
_.pattern = null;
var cache = null;
function DateTimeFormat$PatternPart_0(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineSeed(292, 1, makeCastMap([Q$DateTimeFormat$PatternPart]), DateTimeFormat$PatternPart_0);
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

defineSeed(294, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1, Date_2);
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

defineSeed(293, 294, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), DateRecord_0);
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

defineSeed(673, 294, makeCastMap([Q$Poser, Q$DatePoser, Q$Serializable, Q$Comparable, Q$Date]));
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

defineSeed(764, 238, {}, ApplicationStep2CompletedEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler).onApplicationStep2Completed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_38;
}
;
function $nextStep_0(this$static, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD){
  var rc, rf;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($saveStep2(rc, this$static.curUser.userEmail, this$static.curUser.applicationId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD), new ApplicationStep2Presenter$2_0(this$static));
}

function ApplicationStep2Presenter_0(eventBus, view, proxy){
  $clinit_ApplicationStep2Presenter();
  Presenter_0.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView).setUiHandlers(this);
}

defineSeed(1145, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ApplicationStep2Presenter, Q$ApplicationStep2UiHandlers]), ApplicationStep2Presenter_0);
_.onBind = function onBind_33(){
  $initializeUI(dynamicCast(this.view, Q$ApplicationStep2Presenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_59(event_0){
  this.curUser = event_0.currentUser;
}
;
_.onReset = function onReset_32(){
  var rf, rc;
  rf = new ApplicationFormRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl_0(rf);
  $fire($loadAndReturn(rc, this.curUser.userEmail, this.curUser.applicationId), new ApplicationStep2Presenter$1_0(this));
}
;
_.curUser = null;
function $onSuccess_135(this$static, app){
  $showApplicationDetails_0(dynamicCast(this$static.this$0.view, Q$ApplicationStep2Presenter$MyView), app);
}

function ApplicationStep2Presenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1146, 646, makeCastMap([Q$Receiver]), ApplicationStep2Presenter$1_0);
_.onFailure_0 = function onFailure_147(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_147(app){
  $onSuccess_135(this, dynamicCast(app, Q$ApplicationFormProxy));
}
;
_.this$0 = null;
function $onSuccess_136(this$static){
  $doFire(this$static.this$0.eventBus, new ApplicationStep2CompletedEvent_0, null);
}

function ApplicationStep2Presenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1147, 646, makeCastMap([Q$Receiver]), ApplicationStep2Presenter$2_0);
_.onFailure_0 = function onFailure_148(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_148(saved){
  $onSuccess_136(this, dynamicCast(saved, Q$Boolean));
}
;
_.this$0 = null;
function $initializeUI(this$static){
  var beginDate, fmt, lastDate, maxWeek, today;
  fmt = ($clinit_DateTimeFormat() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));
  today = new Date_1;
  beginDate = $parse_0(fmt, '23/06/2014');
  lastDate = $parse_0(fmt, '11/08/2014');
  maxWeek = 8;
  $insertItem(this$static.lstStartDate, 'Veuillez choisir', '', -1);
  while (lt(fromDouble(beginDate.jsdate.getTime()), fromDouble(lastDate.jsdate.getTime()))) {
    $clinit_CalendarUtil();
    beginDate.setDate_0(beginDate.jsdate.getDate() + 7);
    if (lt(fromDouble(beginDate.jsdate.getTime()), fromDouble(today.jsdate.getTime())))
      continue;
    --maxWeek;
    $insertItem(this$static.lstStartDate, $format(fmt, beginDate, null), '' + maxWeek, -1);
  }
  $insertItem(this$static.lstProgrammes, 'Veuillez choisir', '', -1);
  $insertItem(this$static.lstProgrammes, "LEMANIA CAMP D'ETE AVEC INTERNAT", 'SUMMERCAMP', -1);
  $insertItem(this$static.lstProgrammes, "LEMANIA COURS D'ETE SANS INTERNAT", 'SUMMERCOURSE', -1);
  $insertItem(this$static.lstCourses, 'Veuillez choisir', '', -1);
  $insertItem(this$static.lstCourses, 'Cours de langue', 'LANGUE', -1);
  $insertItem(this$static.lstCourses, 'Cours de langue & Cours de conversation', 'LANGUECONVERSATION', -1);
}

function $onCmdNextStepClick_0(this$static){
  $nextStep_0(dynamicCast(this$static.uiHandlers, Q$ApplicationStep2UiHandlers), $getValue_0(this$static.chkApplicaitonFee).value_0, $getValue_0(this$static.chkPackAssurance).value_0, $getValue_1(this$static.lstProgrammes, this$static.lstProgrammes.element.selectedIndex), $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex), $getItemText(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex), $getPropertyString(this$static.txtJulyWeek.element, 'value'), $getPropertyString(this$static.txtAugustWeek.element, 'value'), $getValue_0(this$static.chkContinueAfter).value_0, $getValue_0(this$static.optConfortPlusPrivate).value_0, $getValue_0(this$static.optConfortPrivate).value_0, $getValue_0(this$static.optStandardPrivate).value_0, $getValue_0(this$static.optConfortPlusShare).value_0, $getValue_0(this$static.optConfortShare).value_0, $getValue_0(this$static.optStandardShare).value_0, $getValue_0(this$static.optKeyDepositCHF).value_0, $getValue_0(this$static.optKeyDepositEuro).value_0, $getValue_0(this$static.optKeyDepositUSD).value_0);
}

function $onLstStartDateChange(this$static){
  var weekNumber;
  $selectClear(this$static.lstWeekNumber.element);
  weekNumber = __parseAndValidateInt($getValue_1(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex));
  while (weekNumber > 0) {
    $insertItem(this$static.lstWeekNumber, '' + weekNumber, '' + weekNumber, -1);
    --weekNumber;
  }
  __parseAndValidateInt($getValue_1(this$static.lstStartDate, this$static.lstStartDate.element.selectedIndex)) > 2 && $removeItem(this$static.lstWeekNumber, this$static.lstWeekNumber.element.options.length - 1);
  $onLstWeekNumberChange(this$static);
}

function $onLstWeekNumberChange(this$static){
  var weekNumber;
  weekNumber = __parseAndValidateInt($getValue_1(this$static.lstWeekNumber, this$static.lstWeekNumber.element.selectedIndex));
  if (weekNumber > 5) {
    $setText(this$static.txtAugustWeek, '' + (weekNumber - 5));
    $setText(this$static.txtJulyWeek, '5');
  }
   else {
    $setText(this$static.txtAugustWeek, '');
    $setText(this$static.txtJulyWeek, '' + weekNumber);
  }
}

function $showApplicationDetails_0(this$static, app){
  $setValue_0(this$static.chkApplicaitonFee, ($clinit_Boolean() , app.isChkApplicaitonFee()?TRUE_1:FALSE_1));
  $setValue_0(this$static.chkPackAssurance, app.isChkPackAssurance()?TRUE_1:FALSE_1);
  selectItemFromList(this$static.lstProgrammes, app.getProgrammesCode());
  selectItemFromList(this$static.lstCourses, app.getCourseCode());
  selectItemFromListByText(this$static.lstStartDate, app.getStartDate());
  $onLstStartDateChange(this$static);
  selectItemFromListByText(this$static.lstWeekNumber, app.getWeekNumber());
  $setText(this$static.txtJulyWeek, app.getTxtJulyWeek());
  $setText(this$static.txtAugustWeek, app.getTxtAugustWeek());
  $setValue_0(this$static.chkContinueAfter, app.isChkContinueAfter()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optConfortPlusPrivate, app.isOptConfortPlusPrivate()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optConfortPrivate, app.isOptConfortPrivate()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optStandardPrivate, app.isOptStandardPrivate()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optConfortPlusShare, app.isOptConfortPlusShare()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optConfortShare, app.isOptConfortShare()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optStandardShare, app.isOptStandardShare()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optKeyDepositCHF, app.isOptKeyDepositCHF()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optKeyDepositEuro, app.isOptKeyDepositEuro()?TRUE_1:FALSE_1);
  $setValue_0(this$static.optKeyDepositUSD, app.isOptKeyDepositUSD()?TRUE_1:FALSE_1);
}

function ApplicationStep2View_0(){
  $initWidget_0(this, $build_main_3(new ApplicationStep2View_BinderImpl$Widgets_0(this)));
}

defineSeed(1152, 711, makeCastMap([Q$IsWidget, Q$ApplicationStep2Presenter$MyView]), ApplicationStep2View_0);
_.setInSlot = function setInSlot_5(slot, content_0){
  slot === ($clinit_ApplicationStep2Presenter() , SLOT_ApplicationStep2)?this.main.setWidget(!content_0?null:!content_0.view?null:content_0.view.asWidget()):undefined;
}
;
_.chkApplicaitonFee = null;
_.chkContinueAfter = null;
_.chkPackAssurance = null;
_.lstCourses = null;
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
_.txtAugustWeek = null;
_.txtJulyWeek = null;
function ApplicationStep2View_BinderImpl_0(){
}

defineSeed(1153, 1, {}, ApplicationStep2View_BinderImpl_0);
function $build_main_3(this$static){
  var main, f_VerticalPanel1, f_Label2, f_Label3, f_FlowPanel4, f_HorizontalPanel5, f_VerticalPanel39, f_VerticalPanel6, f_Label7, chkApplicaitonFee, chkPackAssurance, f_Label8, f_Grid9, f_Label10, lstProgrammes, f_Label11, lstCourses, chkContinueAfter, f_Label24, f_Label25, f_Grid26, f_Label27, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, f_Label28, optConfortPlusShare, optConfortShare, optStandardShare, f_Label29, f_Label30, f_Label31, f_Label32, f_Grid33, f_Label34, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD, f_VerticalPanel35, f_Label36, f_FlexTable37, f_Label38, f_HorizontalPanel40, cmdPreviousStep, sb, cmdNextStep, sb_0;
  main = new SimplePanel_0;
  $add_4(main, (f_VerticalPanel1 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_11(f_VerticalPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'CHOIX DU PROGRAMME', false) , $updateHorizontalAlignment(f_Label2) , f_Label2)) , $add_11(f_VerticalPanel1, (f_Label3 = new Label_0 , $setTextOrHtml(f_Label3.directionalTextHelper, 'Step 2 of 5', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_11(f_VerticalPanel1, (f_FlowPanel4 = new FlowPanel_0 , $add_7(f_FlowPanel4, (f_HorizontalPanel5 = new HorizontalPanel_0 , $add_9(f_HorizontalPanel5, (f_VerticalPanel6 = new VerticalPanel_0 , $add_11(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'PROGRAMMES', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_11(f_VerticalPanel6, (chkApplicaitonFee = new CheckBox_0 , chkApplicaitonFee.inputElem.disabled = true , $setStyleName_0(chkApplicaitonFee, getStylePrimaryName(chkApplicaitonFee.element) + '-disabled') , $setTextOrHtml(chkApplicaitonFee.directionalTextHelper, "Frais d'inscription, CHF 100.-", false) , $setValue_0(chkApplicaitonFee, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkApplicaitonFee = chkApplicaitonFee , chkApplicaitonFee)) , $add_11(f_VerticalPanel6, (chkPackAssurance = new CheckBox_0 , $setTextOrHtml(chkPackAssurance.directionalTextHelper, 'Pack Assurance sant\xE9 CHF 190.- (obligatoire pour les internes sauf les r\xE9sidents en Suisse)', false) , this$static.owner.chkPackAssurance = chkPackAssurance , chkPackAssurance)) , $add_11(f_VerticalPanel6, (f_Label8 = new Label_0 , f_Label8.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_11(f_VerticalPanel6, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 2) , $resizeRows(f_Grid9, 2) , $setWidget_1(f_Grid9, 0, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Programme', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid9, 0, 1, (lstProgrammes = new ListBox_0 , this$static.owner.lstProgrammes = lstProgrammes , lstProgrammes)) , $setWidget_1(f_Grid9, 1, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Combination du cours', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid9, 1, 1, (lstCourses = new ListBox_0 , this$static.owner.lstCourses = lstCourses , lstCourses)) , f_Grid9.element.style['width'] = '100%' , f_Grid9)) , $add_11(f_VerticalPanel6, this$static.f_Grid12) , $setCellVerticalAlignment(f_VerticalPanel6, this$static.f_Grid12, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_11(f_VerticalPanel6, (chkContinueAfter = new CheckBox_0 , $setTextOrHtml(chkContinueAfter.directionalTextHelper, "Je souhaite continuer le programme choisi apr\xE8s le cours d'\xE9t\xE9.", false) , this$static.owner.chkContinueAfter = chkContinueAfter , chkContinueAfter)) , $add_11(f_VerticalPanel6, (f_Label24 = new Label_0 , f_Label24.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label24.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $add_11(f_VerticalPanel6, (f_Label25 = new Label_0 , f_Label25.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label25.directionalTextHelper, 'Logement - Internat', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $add_11(f_VerticalPanel6, (f_Grid26 = new Grid_0 , $resizeColumns(f_Grid26, 4) , $resizeRows(f_Grid26, 2) , $setWidget_1(f_Grid26, 0, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Chambre priv\xE9e', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid26, 0, 1, (optConfortPlusPrivate = new RadioButton_0('new name') , $setTextOrHtml(optConfortPlusPrivate.directionalTextHelper, 'Confort plus', false) , this$static.owner.optConfortPlusPrivate = optConfortPlusPrivate , optConfortPlusPrivate)) , $setWidget_1(f_Grid26, 0, 2, (optConfortPrivate = new RadioButton_0('new name') , $setTextOrHtml(optConfortPrivate.directionalTextHelper, 'Confort', false) , this$static.owner.optConfortPrivate = optConfortPrivate , optConfortPrivate)) , $setWidget_1(f_Grid26, 0, 3, (optStandardPrivate = new RadioButton_0('new name') , $setTextOrHtml(optStandardPrivate.directionalTextHelper, 'Standard', false) , this$static.owner.optStandardPrivate = optStandardPrivate , optStandardPrivate)) , $setWidget_1(f_Grid26, 1, 0, (f_Label28 = new Label_0 , $setTextOrHtml(f_Label28.directionalTextHelper, 'Chambre \xE0 partager (Deux lits jumeaux)', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_1(f_Grid26, 1, 1, (optConfortPlusShare = new RadioButton_0('new name') , $setTextOrHtml(optConfortPlusShare.directionalTextHelper, 'Confort plus', false) , this$static.owner.optConfortPlusShare = optConfortPlusShare , optConfortPlusShare)) , $setWidget_1(f_Grid26, 1, 2, (optConfortShare = new RadioButton_0('new name') , $setTextOrHtml(optConfortShare.directionalTextHelper, 'Confort', false) , this$static.owner.optConfortShare = optConfortShare , optConfortShare)) , $setWidget_1(f_Grid26, 1, 3, (optStandardShare = new RadioButton_0('new name') , $setTextOrHtml(optStandardShare.directionalTextHelper, 'Standard', false) , this$static.owner.optStandardShare = optStandardShare , optStandardShare)) , f_Grid26.element.style['width'] = '100%' , f_Grid26)) , $add_11(f_VerticalPanel6, (f_Label29 = new Label_0 , $setTextOrHtml(f_Label29.directionalTextHelper, "Le nombre de places \xE0 l'internat \xE9tant limit\xE9, une r\xE9servation en avance est recommand\xE9e.\nLes \xE9tudiants doivent arriver le dimanche apr\xE8s-midi et partir le samedi matin.", false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_11(f_VerticalPanel6, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label30.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $add_11(f_VerticalPanel6, (f_Label31 = new Label_0 , f_Label31.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label31.directionalTextHelper, 'D\xE9p\xF4t pour la cl\xE9', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_11(f_VerticalPanel6, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, 'Afin de recevoir la cl\xE9 de la chambre, les \xE9tudiants doivent effectuer un d\xE9p\xF4t \xE0 leur arriv\xE9e.\nCe montant leur sera restitu\xE9 \xE0 leur d\xE9part avec le retour de la cl\xE9. Il sera conserv\xE9 en cas de perte de la cl\xE9.', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $add_11(f_VerticalPanel6, (f_Grid33 = new Grid_0 , $resizeColumns(f_Grid33, 4) , $resizeRows(f_Grid33, 1) , $setWidget_1(f_Grid33, 0, 0, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, 'Choix de la monnaie du d\xE9p\xF4t', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $setWidget_1(f_Grid33, 0, 1, (optKeyDepositCHF = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositCHF.directionalTextHelper, 'CHF 100.-', false) , this$static.owner.optKeyDepositCHF = optKeyDepositCHF , optKeyDepositCHF)) , $setWidget_1(f_Grid33, 0, 2, (optKeyDepositEuro = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositEuro.directionalTextHelper, '\u20AC 100.-', false) , this$static.owner.optKeyDepositEuro = optKeyDepositEuro , optKeyDepositEuro)) , $setWidget_1(f_Grid33, 0, 3, (optKeyDepositUSD = new RadioButton_0('deposit') , $setTextOrHtml(optKeyDepositUSD.directionalTextHelper, 'US$ 100.-', false) , this$static.owner.optKeyDepositUSD = optKeyDepositUSD , optKeyDepositUSD)) , f_Grid33.element.style['width'] = '100%' , f_Grid33)) , f_VerticalPanel6.element.style['width'] = '100%' , f_VerticalPanel6)) , $add_9(f_HorizontalPanel5, (f_VerticalPanel35 = new VerticalPanel_0 , $add_11(f_VerticalPanel35, (f_Label36 = new Label_0 , f_Label36.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label36.directionalTextHelper, 'ELEMENTS CHOISIS', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_11(f_VerticalPanel35, (f_FlexTable37 = new FlexTable_0 , f_FlexTable37.element.style['width'] = '100%' , f_FlexTable37)) , $add_11(f_VerticalPanel35, (f_Label38 = new Label_0 , $setTextOrHtml(f_Label38.directionalTextHelper, 'Total', false) , $updateHorizontalAlignment(f_Label38) , f_Label38)) , f_VerticalPanel35.element['className'] = 'subSection' , f_VerticalPanel35.element.style['width'] = '250px' , f_VerticalPanel35)) , f_HorizontalPanel5.element.style['width'] = '100%' , f_HorizontalPanel5.table['cellSpacing'] = 10 , f_HorizontalPanel5)) , $add_7(f_FlowPanel4, (f_VerticalPanel39 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel39, ALIGN_RIGHT) , $add_11(f_VerticalPanel39, (f_HorizontalPanel40 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel40, ALIGN_RIGHT) , $add_9(f_HorizontalPanel40, (cmdPreviousStep = new Button_0 , $setHTML(cmdPreviousStep, (sb = new StringBuilder_0 , sb.impl.string += 'Pr\xE9c\xE9dant' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdPreviousStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdPreviousStep)) , $add_9(f_HorizontalPanel40, (cmdNextStep = new Button_0 , $setHTML(cmdNextStep, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Next Step' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $setInnerText(cmdNextStep.element, 'Enregistrer & Suivant >>') , $addDomHandler(cmdNextStep, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdNextStep)) , f_HorizontalPanel40.element.style['width'] = '35%' , f_HorizontalPanel40.table['cellSpacing'] = 10 , f_HorizontalPanel40)) , f_VerticalPanel39.element.style['width'] = '100%' , f_VerticalPanel39)) , f_FlowPanel4.element.style['width'] = '900px' , f_FlowPanel4)) , f_VerticalPanel1.element.style['height'] = '' , f_VerticalPanel1.element.style['width'] = '100%' , f_VerticalPanel1));
  this$static.owner.main = main;
  return main;
}

function ApplicationStep2View_BinderImpl$Widgets_0(owner){
  var f_Label13, lstStartDate, f_Label14, f_Label15, lstWeekNumber, f_Label16, f_Label17, f_Label18, f_Label19, f_Label20, txtJulyWeek, txtAugustWeek, f_Label21, f_Label22, f_Label23;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ApplicationStep2View_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ApplicationStep2View_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ApplicationStep2View_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ApplicationStep2View_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.f_Grid12 = new Grid_0;
  $resize(this.f_Grid12);
  $setWidget_1(this.f_Grid12, 0, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Date de d\xE9but', false) , $updateHorizontalAlignment(f_Label13) , f_Label13));
  $setWidget_1(this.f_Grid12, 0, 1, (lstStartDate = new ListBox_0 , $addDomHandler(lstStartDate, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.owner.lstStartDate = lstStartDate , lstStartDate));
  $setWidget_1(this.f_Grid12, 0, 2, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, '(dd/MM/yyyy)', false) , $updateHorizontalAlignment(f_Label14) , f_Label14));
  $setWidget_1(this.f_Grid12, 1, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Nombre de semaines', false) , $updateHorizontalAlignment(f_Label15) , f_Label15));
  $setWidget_1(this.f_Grid12, 1, 1, (lstWeekNumber = new ListBox_0 , $addDomHandler(lstWeekNumber, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this.owner.lstWeekNumber = lstWeekNumber , lstWeekNumber));
  $setWidget_1(this.f_Grid12, 1, 2, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Reccomandation : au moins 2 semaines', false) , $updateHorizontalAlignment(f_Label16) , f_Label16));
  $setWidget_1(this.f_Grid12, 2, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17));
  $setWidget_1(this.f_Grid12, 2, 1, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Juillet', false) , $updateHorizontalAlignment(f_Label18) , f_Label18));
  $setWidget_1(this.f_Grid12, 2, 2, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Ao\xFBt', false) , $updateHorizontalAlignment(f_Label19) , f_Label19));
  $setWidget_1(this.f_Grid12, 3, 0, (f_Label20 = new Label_0 , f_Label20.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label20.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label20) , f_Label20));
  $setWidget_1(this.f_Grid12, 3, 1, (txtJulyWeek = new TextBox_0 , txtJulyWeek.element['className'] = 'sis_textbox_readonly' , txtJulyWeek.element.style['width'] = '100px' , this.owner.txtJulyWeek = txtJulyWeek , txtJulyWeek));
  $setWidget_1(this.f_Grid12, 3, 2, (txtAugustWeek = new TextBox_0 , txtAugustWeek.element['className'] = 'sis_textbox_readonly' , txtAugustWeek.element.style['width'] = '100px' , this.owner.txtAugustWeek = txtAugustWeek , txtAugustWeek));
  $setWidget_1(this.f_Grid12, 4, 0, (f_Label21 = new Label_0 , f_Label21.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label21.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label21) , f_Label21));
  $setWidget_1(this.f_Grid12, 4, 1, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, '(Cours standard)', false) , $updateHorizontalAlignment(f_Label22) , f_Label22));
  $setWidget_1(this.f_Grid12, 4, 2, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, '(Cours intensifs)', false) , $updateHorizontalAlignment(f_Label23) , f_Label23));
  $setWidth(this.f_Grid12, '100%');
  $setCellPadding(this.f_Grid12, 2);
}

defineSeed(1154, 1, {}, ApplicationStep2View_BinderImpl$Widgets_0);
_.f_Grid12 = null;
_.owner = null;
function ApplicationStep2View_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1155, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$1_0);
_.onClick = function onClick_6(event_0){
  $onCmdNextStepClick_0(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1156, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$2_0);
_.onChange = function onChange(event_0){
  $onLstStartDateChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1157, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$3_0);
_.onChange = function onChange_0(event_0){
  $onLstWeekNumberChange(this.this$1.owner);
}
;
_.this$1 = null;
function ApplicationStep2View_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1158, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ApplicationStep2View_BinderImpl$Widgets$4_0);
_.onClick = function onClick_7(event_0){
  $doFire(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$ApplicationStep2UiHandlers), Q$ApplicationStep2Presenter).eventBus, new GotoPreviousPageEvent_0(($clinit_History() , impl_2?token_1 == null?'':token_1:'')), null);
}
;
_.this$1 = null;
function $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$) {
    result = new ApplicationStep2Presenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2View$_annotation$$none$$(this$static), $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$MyProxy$_annotation$$none$$(this$static));
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

defineSeed(1162, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_149(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$eprospects$client$presenter$applicationstep2$ApplicationStep2Presenter$_annotation$$none$$(this.this$1.this$0));
}
;
defineSeed(1256, 706, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
defineSeed(1258, 730, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$ApplicationPaymentEvent$ApplicationPaymentHandler, Q$ApplicationStartEvent$ApplicationStartHandler, Q$ApplicationStep1CompletedEvent$ApplicationStep1CompletedHandler, Q$ApplicationStep2CompletedEvent$ApplicationStep2CompletedHandler, Q$ApplicationStep3CompletedEvent$ApplicationStep3CompletedHandler, Q$ApplicationStep4CompletedEvent$ApplicationStep4CompletedHandler, Q$ApplicationStep5CompletedEvent$ApplicationStep5CompletedHandler, Q$DrawSchoolInterfaceEvent$DrawSchoolInterfaceHandler, Q$GotoPreviousPageEvent$GotoPreviousPageHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$PageAfterSelectEvent$PageAfterSelectHandler]));
_.onApplicationStep2Completed = function onApplicationStep2Completed_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$8_0(this.eventBus));
}
;
function $success_55(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$8$1_0);
}

function MainPagePresenterMyProxyImpl$8_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(1283, 719, {}, MainPagePresenterMyProxyImpl$8_0);
_.success = function success_57(presenter){
  $success_55(dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$8$1_0(){
}

defineSeed(1284, 1, {}, MainPagePresenterMyProxyImpl$8$1_0);
_.execute_1 = function execute_83(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'applicationstep3', true);
}
;
function $saveStep2(this$static, emailAddress, appId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD){
  var x;
  x = new ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$9X_0(this$static, emailAddress, appId, chkApplicaitonFee, chkPackAssurance, programmesCode, courseCode, startDate, weekNumber, txtJulyWeek, txtAugustWeek, chkContinueAfter, optConfortPlusPrivate, optConfortPrivate, optStandardPrivate, optConfortPlusShare, optConfortShare, optStandardShare, optKeyDepositCHF, optKeyDepositEuro, optKeyDepositUSD);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$9X_0(this$0, val$emailAddress, val$appId, val$chkApplicaitonFee, val$chkPackAssurance, val$programmesCode, val$courseCode, val$startDate, val$weekNumber, val$txtJulyWeek, val$txtAugustWeek, val$chkContinueAfter, val$optConfortPlusPrivate, val$optConfortPrivate, val$optStandardPrivate, val$optConfortPlusShare, val$optConfortShare, val$optStandardShare, val$optKeyDepositCHF, val$optKeyDepositEuro, val$optKeyDepositUSD){
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
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1693, 650, makeCastMap([Q$AbstractRequest]), ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('pZ$duZIGf0MutK5ylcWG2etrQ44=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$emailAddress, this.val$appId, ($clinit_Boolean() , this.val$chkApplicaitonFee?TRUE_1:FALSE_1), this.val$chkPackAssurance?TRUE_1:FALSE_1, this.val$programmesCode, this.val$courseCode, this.val$startDate, this.val$weekNumber, this.val$txtJulyWeek, this.val$txtAugustWeek, this.val$chkContinueAfter?TRUE_1:FALSE_1, this.val$optConfortPlusPrivate?TRUE_1:FALSE_1, this.val$optConfortPrivate?TRUE_1:FALSE_1, this.val$optStandardPrivate?TRUE_1:FALSE_1, this.val$optConfortPlusShare?TRUE_1:FALSE_1, this.val$optConfortShare?TRUE_1:FALSE_1, this.val$optStandardShare?TRUE_1:FALSE_1, this.val$optKeyDepositCHF?TRUE_1:FALSE_1, this.val$optKeyDepositEuro?TRUE_1:FALSE_1, this.val$optKeyDepositUSD?TRUE_1:FALSE_1]), this.propertyRefs, Ljava_lang_Boolean_2_classLit, null);
}
;
_.val$appId = null;
_.val$chkApplicaitonFee = false;
_.val$chkContinueAfter = false;
_.val$chkPackAssurance = false;
_.val$courseCode = null;
_.val$emailAddress = null;
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
function $startsWith(this$static, prefix, toffset){
  return !(toffset < 0 || toffset >= this$static.length) && this$static.indexOf(prefix, toffset) == toffset;
}

function valueOf_5(x){
  return String.fromCharCode.apply(null, x);
}

function $append_7(this$static, x){
  $appendNonNull(this$static.impl, valueOf_5(x));
  return this$static;
}

function StringBuffer_1(){
  $$init_29(this);
}

defineSeed(1885, 1, makeCastMap([Q$CharSequence]), StringBuffer_1);
var Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter', 1145), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter$1', 1146), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2Presenter$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2Presenter$2', 1147), Lcom_lemania_eprospects_client_event_ApplicationStep2CompletedEvent_2_classLit = createForClass('com.lemania.eprospects.client.event.', 'ApplicationStep2CompletedEvent', 764), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8', 1283), Lcom_lemania_eprospects_client_presenter_mainpage_MainPagePresenterMyProxyImpl$8$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.mainpage.', 'MainPagePresenterMyProxyImpl$8$1', 1284), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View', 1152), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl', 1153), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets', 1154), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$1', 1155), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$2', 1156), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$3', 1157), Lcom_lemania_eprospects_client_presenter_applicationstep2_ApplicationStep2View_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.eprospects.client.presenter.applicationstep2.', 'ApplicationStep2View_BinderImpl$Widgets$4', 1158), Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat', 291), Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DateTimeFormat$PatternPart', 292), Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl.', 'DateRecord', 293), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone', 289), Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DefaultDateTimeFormatInfo', 286), Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultDateTimeFormatInfo', 285), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl', 290), Lcom_lemania_eprospects_shared_service_ApplicationFormRequestFactory_1ApplicationFormRequestContextImpl$9X_2_classLit = createForClass('com.lemania.eprospects.shared.service.', 'ApplicationFormRequestFactory_ApplicationFormRequestContextImpl$9X', 1693);
$entry(onLoad)(5);