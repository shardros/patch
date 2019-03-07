(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{160:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Computer Vision allows your robots to understand their environment. For the competition, this is used to locate cubes and arena walls.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Our documentation is not as complete as the "),s("a",{attrs:{href:"https://www.studentrobotics.org/docs/programming/sr/vision/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Student Robotics vision documentation"),s("OutboundLink")],1),t._v(". As we share much of the same code for vision, you can use that too.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("p",[t._v("You must use one of the following resolutions:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Here's a more complete example:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vision","aria-hidden":"true"}},[this._v("#")]),this._v(" Vision")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you tell you robot to "),e("code",[this._v("see")]),this._v(", it will give you a list of all the markers it can see. The objects it returns will give you information about the type of the marker, the distance/angle to the marker along with other assorted information.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Our "),s("code",[t._v("MarkerInfo")]),t._v(" object is slightly different from Student Robotics:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("marker_type")]),t._v(" can be one of:\n"),s("ul",[s("li",[s("code",[t._v("robot.MARKER_ARENA")])]),t._v(" "),s("li",[s("code",[t._v("robot.MARKER_TOKEN")])])])]),t._v(" "),s("li",[t._v("There's also a "),s("code",[t._v("token_type")]),t._v(" property that can be one of:\n"),s("ul",[s("li",[s("code",[t._v("robot.TOKEN_NONE")]),t._v(" "),s("em",[t._v("(if the marker is not a token)")])]),t._v(" "),s("li",[s("code",[t._v("robot.TOKEN_ORE")]),t._v(" "),s("em",[t._v("(normal cube)")])]),t._v(" "),s("li",[s("code",[t._v("robot.TOKEN_GOLD")]),t._v(" "),s("em",[t._v("(treasure cube)")])]),t._v(" "),s("li",[s("code",[t._v("robot.TOKEN_FOOLS_GOLD")]),t._v(" "),s("em",[t._v("(trash cube)")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[this._v("#")]),this._v(" Python")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To look for markers call "),e("code",[this._v("see()")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("markers "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("markers")]),this._v(" is now a Python list of "),e("code",[this._v("marker objects")]),this._v(". Each "),e("code",[this._v("marker")]),this._v(" object contains the following properties.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("marker.dist")])]),t._v(" "),s("td",[t._v("Distance to the marker in metres")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("marker.rot_y")])]),t._v(" "),s("td",[t._v("Angle to the marker in degrees")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("marker.info.code")])]),t._v(" "),s("td",[t._v("Numeric code of the marker")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("marker.info.marker_type")])]),t._v(" "),s("td",[t._v("One of "),s("code",[t._v("MARKER_ARENA")]),t._v(" or "),s("code",[t._v("MARKER_TOKEN")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("marker.info.token_type")])]),t._v(" "),s("td",[t._v("One of "),s("code",[t._v("TOKEN_NONE")]),t._v(", "),s("code",[t._v("TOKEN_ORE")]),t._v(", "),s("code",[t._v("TOKEN_GOLD")]),t._v(", or "),s("code",[t._v("TOKEN_FOOLS_GOLD")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default the camera takes pictures at a resolution of "),e("strong",[this._v("640x480px")]),this._v(". You can change this by specifying a "),e("code",[this._v("res")]),this._v(" parameter to "),e("code",[this._v("R.see()")]),this._v(". This can be helpful when trying to see things far away.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("markers "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1920")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1088")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("(640, 480)")]),t._v(" "),s("em",[t._v("(default)")])]),t._v(" "),s("li",[s("code",[t._v("(1296, 736)")])]),t._v(" "),s("li",[s("code",[t._v("(1296, 976)")])]),t._v(" "),s("li",[s("code",[t._v("(1920, 1088)")])]),t._v(" "),s("li",[s("code",[t._v("(1920, 1440)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Using a higher resolution will increase the amount of time it takes to process the image.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" robot\n\nR "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Robot"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmarkers "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" marker "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" markers"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" marker"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token_type "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TOKEN_GOLD"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       move"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("marker"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dist"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"blockly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockly","aria-hidden":"true"}},[this._v("#")]),this._v(" Blockly")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Blocks for vision can be found in the "),e("strong",[this._v("Vision")]),this._v(" section.")])}],!1,null,null,null);n.options.__file="vision.md";e.default=n.exports}}]);