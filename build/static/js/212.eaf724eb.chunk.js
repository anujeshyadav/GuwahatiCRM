(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [212],
  {
    2321: function (e, a, t) {},
    3086: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(6),
        l = t(55),
        o = t(17),
        r = t(18),
        i = t(19),
        c = t(20),
        m = t(1),
        s = t.n(m),
        u = t(883),
        p = t(884),
        d = t(892),
        E = t(885),
        v = t(894),
        h = t(886),
        g = t(887),
        Y = t(873),
        D = t(170),
        S = (t(2321), t(985)),
        M = t(307),
        _ = t(124),
        T = t(221),
        f = t.n(T),
        N = t(88),
        C = t(90),
        b =
          (t(971),
          (function (e) {
            Object(i.a)(t, e);
            var a = Object(c.a)(t);
            function t(e) {
              var r;
              return (
                Object(o.a)(this, t),
                ((r = a.call(this, e)).onChangeHandler = function (e) {
                  r.setState({ selectedFile: e.target.files[0] }),
                    r.setState({ selectedName: e.target.files[0].name });
                }),
                (r.changeHandler = function (e) {
                  r.setState(Object(l.a)({}, e.target.name, e.target.value));
                }),
                (r.submitHandler = function (e) {
                  e.preventDefault(), r.setState({ Loading: "Loading..." });
                  var a = JSON.parse(localStorage.getItem("userData")),
                    t = new FormData();
                  t.append("name", r.state.name),
                    t.append("email", r.state.email),
                    r.state.password && t.append("Password", r.state.password),
                    t.append("dateFormat", r.state.Date_format),
                    t.append("dateTimeFormat", r.state.Date_Time_format),
                    t.append("locale", r.state.Locale),
                    t.append("timeZone", r.state.T_Zone),
                    t.append("currency", r.state.Currency),
                    null !== r.state.selectedFile &&
                      t.append("file", r.state.selectedFile),
                    r.state.password
                      ? r.state.password == r.state.cnfmPassword
                        ? Object(N.y)(
                            null === a || void 0 === a ? void 0 : a.accountId,
                            t
                          )
                            .then(function (e) {
                              var a;
                              console.log(e);
                              var t = Object(n.a)(
                                Object(n.a)(
                                  {},
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.updateUser[0]
                                ),
                                null === e || void 0 === e ? void 0 : e.user
                              );
                              null === (a = r.context) ||
                                void 0 === a ||
                                a.setUserInformatio(t),
                                localStorage.setItem(
                                  "userData",
                                  JSON.stringify(t)
                                ),
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.status) &&
                                  (f()(
                                    "Success!",
                                    "Updated Successfully",
                                    "success"
                                  ),
                                  r.setState({ Loading: "Submit" }));
                            })
                            .catch(function (e) {
                              console.log("dddddd"),
                                f()("Error!", "Something went Wrong", "error"),
                                r.setState({ Loading: "Submit" }),
                                console.log(e.response);
                            })
                        : (f()("Password Does Not Match"),
                          r.setState({ Loading: "Submit" }))
                      : Object(N.y)(
                          null === a || void 0 === a ? void 0 : a.accountId,
                          t
                        )
                          .then(function (e) {
                            var a;
                            console.log(e);
                            var t = Object(n.a)(
                              Object(n.a)(
                                {},
                                null === e || void 0 === e
                                  ? void 0
                                  : e.updateUser[0]
                              ),
                              null === e || void 0 === e ? void 0 : e.user
                            );
                            null === (a = r.context) ||
                              void 0 === a ||
                              a.setUserInformatio(t),
                              localStorage.setItem(
                                "userData",
                                JSON.stringify(t)
                              ),
                              (null === e || void 0 === e
                                ? void 0
                                : e.status) &&
                                (f()(
                                  "Success!",
                                  "Updated Successfully",
                                  "success"
                                ),
                                r.setState({ Loading: "Submit" }));
                          })
                          .catch(function (e) {
                            console.log("object"),
                              f()("Error!", "Something went Wrong", "error"),
                              console.log(e.response),
                              r.setState({ Loading: "Submit" });
                          });
                }),
                (r.state = {
                  name: "",
                  LoginData: {},
                  Update_User_details: {},
                  email: "",
                  cnfmPassword: "",
                  password: "",
                  Role: "",
                  adminimg: "",
                  Date_format: "",
                  Date_Time_format: "",
                  Currency: "",
                  selectedName: "",
                  Locale: "",
                  Loading: "Submit",
                  T_Zone: "",
                  selectedFile: null,
                  data: {},
                }),
                r
              );
            }
            return (
              Object(r.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    console.log(this.context);
                    var e = JSON.parse(localStorage.getItem("userData"));
                    console.log(e),
                      this.setState({ LoginData: e }),
                      this.setState({
                        name: null === e || void 0 === e ? void 0 : e.name,
                        email: null === e || void 0 === e ? void 0 : e.email,
                        mobile: null === e || void 0 === e ? void 0 : e.mobile,
                        Role: null === e || void 0 === e ? void 0 : e.Role,
                        Date_format: e.dateFormat,
                        Locale: null === e || void 0 === e ? void 0 : e.locale,
                        Date_Time_format:
                          null === e || void 0 === e
                            ? void 0
                            : e.dateTimeFormat,
                        T_Zone:
                          null === e || void 0 === e ? void 0 : e.timeZone,
                        Currency:
                          null === e || void 0 === e ? void 0 : e.currency,
                      }),
                      (void 0 !=
                        (null === e || void 0 === e ? void 0 : e.currency) &&
                        null !=
                          (null === e || void 0 === e ? void 0 : e.currency)) ||
                        this.setState({ Currency: "USD" });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e, a, t, n, l, o, r, i, c, m, T;
                    return (
                      console.log(
                        null === (e = this.context) || void 0 === e
                          ? void 0
                          : e.UserInformatio
                      ),
                      s.a.createElement(
                        s.a.Fragment,
                        null,
                        s.a.createElement(_.a, {
                          breadCrumbTitle: "Profile",
                          breadCrumbParent: "Pages",
                          breadCrumbActive: "Profile",
                        }),
                        s.a.createElement(
                          "div",
                          { id: "user-profile" },
                          s.a.createElement(
                            u.a,
                            { className: "m-0 justify-content-center" },
                            s.a.createElement(
                              p.a,
                              { lg: "4", md: "4", xl: "4", sm: "12" },
                              s.a.createElement(
                                d.a,
                                {
                                  className:
                                    "bg-authentication rounded-0 mb-0 w-100",
                                },
                                s.a.createElement(
                                  "div",
                                  { className: "profile-img text-center st-1" },
                                  (
                                    null === (a = this.state.LoginData) ||
                                    void 0 === a
                                      ? void 0
                                      : a.profileImage
                                  )
                                    ? s.a.createElement(
                                        s.a.Fragment,
                                        null,
                                        s.a.createElement("img", {
                                          src: "http://65.0.96.247:8000//Images/".concat(
                                            null === (t = this.context) ||
                                              void 0 === t ||
                                              null === (n = t.UserInformatio) ||
                                              void 0 === n
                                              ? void 0
                                              : n.profileImage
                                          ),
                                          alt: "adminimg",
                                          className:
                                            "img-fluid img-border rounded-circle box-shadow-1 mt-1",
                                          width: "250px",
                                          height: "280px",
                                        })
                                      )
                                    : s.a.createElement(
                                        s.a.Fragment,
                                        null,
                                        s.a.createElement("img", {
                                          src: "http://65.0.96.247:8000//Images/".concat(
                                            null === (l = this.context) ||
                                              void 0 === l ||
                                              null === (o = l.UserInformatio) ||
                                              void 0 === o
                                              ? void 0
                                              : o.profileImage
                                          ),
                                          alt: "adminimg",
                                          className:
                                            "img-fluid img-border rounded-circle box-shadow-1 mt-1",
                                          width: "210px",
                                          height: "280px",
                                        })
                                      ),
                                  s.a.createElement(
                                    "ul",
                                    {
                                      style: { listStyleType: "none" },
                                      className: "lst-1 usrdatlist",
                                    },
                                    s.a.createElement(
                                      "li",
                                      { className: "lst-2 p-1" },
                                      "Name:",
                                      " ",
                                      s.a.createElement(
                                        "span",
                                        { className: "lst-3" },
                                        s.a.createElement(
                                          "strong",
                                          null,
                                          null === (r = this.state.LoginData) ||
                                            void 0 === r
                                            ? void 0
                                            : r.name
                                        )
                                      )
                                    ),
                                    s.a.createElement(
                                      "li",
                                      { className: "lst-2 p-1" },
                                      "Email:",
                                      " ",
                                      s.a.createElement(
                                        "span",
                                        { className: "lst-3" },
                                        s.a.createElement(
                                          "strong",
                                          null,
                                          null === (i = this.context) ||
                                            void 0 === i ||
                                            null === (c = i.UserInformatio) ||
                                            void 0 === c
                                            ? void 0
                                            : c.email
                                        )
                                      )
                                    ),
                                    s.a.createElement(
                                      "li",
                                      { className: "lst-2 p-1" },
                                      "Role:",
                                      s.a.createElement(
                                        "span",
                                        { className: "lst-3" },
                                        s.a.createElement(
                                          "strong",
                                          null,
                                          null === (m = this.context) ||
                                            void 0 === m ||
                                            null === (T = m.UserInformatio) ||
                                            void 0 === T
                                            ? void 0
                                            : T.Role
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            s.a.createElement(
                              p.a,
                              {
                                sm: "12",
                                xl: "8",
                                lg: "8",
                                md: "8",
                                className: "d-flex justify-content-center",
                              },
                              s.a.createElement(
                                d.a,
                                {
                                  className:
                                    "bg-authentication rounded-0 mb-0 w-100",
                                },
                                s.a.createElement(
                                  E.a,
                                  {
                                    className: "m-1",
                                    onSubmit: this.submitHandler,
                                  },
                                  s.a.createElement(
                                    "div",
                                    { className: "st-2" },
                                    s.a.createElement(
                                      v.a,
                                      null,
                                      s.a.createElement(
                                        "h4",
                                        { className: "mb-3" },
                                        "Edit Profile"
                                      ),
                                      s.a.createElement(p.a, null)
                                    ),
                                    s.a.createElement(
                                      u.a,
                                      { className: "m-0" },
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "UserName"
                                        ),
                                        s.a.createElement(g.a, {
                                          type: "text",
                                          name: "name",
                                          placeholder: "Name",
                                          value: this.state.name,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(h.a, null, "Email"),
                                        s.a.createElement(g.a, {
                                          type: "email",
                                          name: "email",
                                          placeholder: "email",
                                          value: this.state.email,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Password"
                                        ),
                                        s.a.createElement(g.a, {
                                          type: "password",
                                          name: "password",
                                          placeholder: "Password",
                                          value: this.state.password,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Confirm Password"
                                        ),
                                        s.a.createElement(g.a, {
                                          type: "password",
                                          name: "cnfmPassword",
                                          placeholder: "Reset password",
                                          value: this.state.cnfmPassword,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "User Image"
                                        ),
                                        s.a.createElement(g.a, {
                                          className: "form-control",
                                          type: "file",
                                          name: "profileImage",
                                          onChange: this.onChangeHandler,
                                        })
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(h.a, null, "Locale"),
                                        s.a.createElement(
                                          Y.a,
                                          {
                                            name: "Locale",
                                            value: this.state.Locale,
                                            onChange: this.changeHandler,
                                            required: !0,
                                            type: "select",
                                          },
                                          s.a.createElement(
                                            "option",
                                            { value: "NA" },
                                            "--Select--"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "en_US" },
                                            "English (United States)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "en_GB" },
                                            "English (United Kingdom)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "fr_FR" },
                                            "French (France)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "es_ES" },
                                            "es_ES Spanish (Spain)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "de_DE" },
                                            "German (Germany)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "it_IT" },
                                            "Italian (Italy)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ja_JP" },
                                            "Japanese (Japan)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "zh_CN" },
                                            "Chinese ( China)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ru_RU" },
                                            " Russian (Russia)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ar_SA" },
                                            "Arabic (Saudi Arabia)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "pt_BR" },
                                            "Portuguese (Brazil)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ko_KR" },
                                            "Korean (South Korea)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "hi_IN" },
                                            "Hindi(India)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "tr_TR" },
                                            "Turkish (Turkey)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "nl_NL" },
                                            "Dutch (Netherlands)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "sv_SE" },
                                            "Swedish (Sweden)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "pl_PL" },
                                            "Polish (Poland)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "no_NO" },
                                            "Norwegian (Norway)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "fi_FI" },
                                            "Finnish (Finland)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "da_DK" },
                                            "Danish (Denmark)"
                                          )
                                        )
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Time Zone"
                                        ),
                                        s.a.createElement(
                                          Y.a,
                                          {
                                            name: "T_Zone",
                                            value: this.state.T_Zone,
                                            onChange: this.changeHandler,
                                            required: !0,
                                            type: "select",
                                          },
                                          s.a.createElement(
                                            "option",
                                            { value: "us" },
                                            "--Select--"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Etc/UTC" },
                                            "Coordinated Universal Time (UTC)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "GMT" },
                                            "Greenwich Mean Time (GMT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Europe/London-BST" },
                                            "British Summer Time (BST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Europe/Berlin-CST" },
                                            "Central European Time (CET)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Europe/Berlin-CEST" },
                                            "Central European Summer Time (CEST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            {
                                              value: "America/Los_Angeles-PST",
                                            },
                                            "Pacific Standard Time (PST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            {
                                              value: "America/Los_Angeles-PDT",
                                            },
                                            "Pacific Daylight Time (PDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "CST" },
                                            "(Central Standard Time - CST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/Phoenix-MST" },
                                            "(Mountain Standard Time - MST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/Denver-MDT" },
                                            "(Mountain Daylight Time - MDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/Chicago-CDT" },
                                            "(Central Daylight Time - CDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/New_York-EDT" },
                                            "Eastern Daylight Time (EDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Pacific/Honolulu -HST" },
                                            "Hawaii Standard Time (HST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/Anchorage-AKST" },
                                            "Alaska Standard Time (AKST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "America/Anchorage-AKDT" },
                                            "Alaska Daylight Time (AKDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Australia/Sydney-AEST" },
                                            "Australian Eastern Standard Time (AEST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Australia/Sydney-AEDT" },
                                            "Australian Eastern Daylight Time (AEDT)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Asia/Tokyo-JST" },
                                            "Japan Standard Time (JST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Asia/Shanghai-CST" },
                                            "China Standard Time (CST)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "Asia/Calcutta-IST" },
                                            "Indian Standard Time (IST)"
                                          )
                                        )
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Date-Format"
                                        ),
                                        s.a.createElement(
                                          Y.a,
                                          {
                                            name: "Date_format",
                                            value: this.state.Date_format,
                                            onChange: this.changeHandler,
                                            required: !0,
                                            type: "select",
                                          },
                                          s.a.createElement(
                                            "option",
                                            { value: "us" },
                                            "--Select--"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "YYYY-MM-DD" },
                                            "YYYY-MM-DD (e.g., 2023-10-16)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MM/DD/YYYY" },
                                            "MM/DD/YYYY (e.g., 10/16/2023)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "DD/MM/YYYY" },
                                            "DD/MM/YYYY (e.g., 16/10/2023)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MMM D, YYYY" },
                                            "MMM D, YYYY (e.g., Oct 16, 2023)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "D MMM, YYYY" },
                                            "D MMM, YYYY (e.g., 16 Oct, 2023)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MMMM D, YYYY" },
                                            "MMMM D, YYYY (e.g., October 16, 2023)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "D of MMMM, YYYY" },
                                            "D of MMMM, YYYY (e.g., 16 of October, 2023)"
                                          )
                                        )
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Date-Time-Format"
                                        ),
                                        s.a.createElement(
                                          Y.a,
                                          {
                                            name: "Date_Time_format",
                                            value: this.state.Date_Time_format,
                                            onChange: this.changeHandler,
                                            required: !0,
                                            type: "select",
                                          },
                                          s.a.createElement(
                                            "option",
                                            { value: "us" },
                                            "--Select--"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "YYYY-MM-DD HH:mm:ss" },
                                            "YYYY-MM-DD HH:mm:ss (e.g., 2023-10-16 15:30:45)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MM/DD/YYYY h:mm A" },
                                            "MM/DD/YYYY h:mm A (e.g., 10/16/2023 3:30 PM)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "DD/MM/YYYY HH:mm" },
                                            "DD/MM/YYYY HH:mm (e.g., 16/10/2023 15:30)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MMM D, YYYY h:mm A" },
                                            "MMM D, YYYY h:mm A (e.g., Oct 16, 2023 3:30 PM)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "D MMM, YYYY HH:mm" },
                                            "D MMM, YYYY HH:mm (e.g., 16 Oct, 2023 15:30)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MMMM D, YYYY h:mm A" },
                                            "MMMM D, YYYY h:mm A (e.g., October 16, 2023 3:30 PM)"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "D of MMMM, YYYY HH:mm" },
                                            "D of MMMM, YYYY HH:mm (e.g., 16 of October, 2023 15:30)"
                                          )
                                        )
                                      ),
                                      s.a.createElement(
                                        p.a,
                                        {
                                          sm: "12",
                                          lg: "6",
                                          md: "6",
                                          className: "p-1",
                                        },
                                        s.a.createElement(
                                          h.a,
                                          null,
                                          "Currency"
                                        ),
                                        s.a.createElement(
                                          Y.a,
                                          {
                                            name: "Currency",
                                            value: this.state.Currency,
                                            onChange: this.changeHandler,
                                            required: !0,
                                            type: "select",
                                          },
                                          s.a.createElement(
                                            "option",
                                            { value: "NS" },
                                            "--Select--"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "USD_$" },
                                            "USD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "AED_AED" },
                                            "AED"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ARS_$" },
                                            "ARS"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "AUD_$" },
                                            "AUD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "BGN_\u043b\u0432" },
                                            "BGN"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "BRL_R$" },
                                            "BRL"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "BSD_$" },
                                            "BSD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "CAD_$" },
                                            "CAD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "CLP_$" },
                                            "CLP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "CNY_\xa5" },
                                            "CNY"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "COP_$" },
                                            "COP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "CZK_K\u010d" },
                                            "CZK"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "DKK_kr" },
                                            "DKK"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "DOP_RD$" },
                                            "DOP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "EGP_\xa3" },
                                            "EGP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "EUR_\u20ac" },
                                            "EUR"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "FJD_$" },
                                            "FJD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "GBP_\xa3" },
                                            "GBP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "GTQ_Q" },
                                            "GTQ"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "HKD_$" },
                                            "HKD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "HUF_Ft" },
                                            "HUF"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "IDR_Rp" },
                                            "IDR"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ILS_\u20aa" },
                                            "ILS"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "INR_\u20b9" },
                                            "INR"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "ISK_kr" },
                                            "ISK"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "JPY_\xa5" },
                                            "JPY"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "KRW_\u20a9" },
                                            "KRW"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "KZT_\u043b\u0432" },
                                            "KZT"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MXN_$" },
                                            "MXN"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "MYR_RM" },
                                            "MYR"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "NOK_kr" },
                                            "NOK"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "NZD_$" },
                                            "NZD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PAB_B/." },
                                            "PAB"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PEN_S/." },
                                            "PEN"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PHP_\u20b1" },
                                            "PHP"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PKR_\u20a8" },
                                            "PKR"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PLN_z\u0142" },
                                            "PLN"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "PYG_Gs" },
                                            "PYG"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "RON_lei" },
                                            "RON"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "RUB_\u20bd" },
                                            "RUB"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "SEK_kr" },
                                            "SEK"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "SGD_$" },
                                            "SGD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "THB_\u0e3f" },
                                            "THB"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "TWD_NT$" },
                                            "TWD"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "UAH_\u20b4" },
                                            "UAH"
                                          ),
                                          s.a.createElement(
                                            "option",
                                            { value: "UYU_$U" },
                                            "UYU"
                                          )
                                        )
                                      )
                                    ),
                                    s.a.createElement(
                                      u.a,
                                      null,
                                      s.a.createElement(
                                        p.a,
                                        null,
                                        s.a.createElement(S.a, {
                                          color: "primary",
                                          className: "mb-1 mx-1",
                                          icon: s.a.createElement(M.a, {
                                            className: "vx-icon",
                                            size: 16,
                                          }),
                                          label:
                                            " I accept the terms & conditions.",
                                          defaultChecked: !0,
                                        })
                                      )
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex justify-content-between",
                                      },
                                      s.a.createElement(
                                        D.a.Ripple,
                                        { color: "primary", type: "submit" },
                                        this.state.Loading
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(s.a.Component));
      (b.contextType = C.a), (a.default = b);
    },
    985: function (e, a, t) {
      "use strict";
      var n = t(17),
        l = t(18),
        o = t(19),
        r = t(20),
        i = t(1),
        c = t.n(i),
        m = (function (e) {
          Object(o.a)(t, e);
          var a = Object(r.a)(t);
          function t() {
            return Object(n.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    "div",
                    {
                      className: "vx-checkbox-con "
                        .concat(
                          this.props.className ? this.props.className : "",
                          " vx-checkbox-"
                        )
                        .concat(this.props.color),
                    },
                    c.a.createElement("input", {
                      type: "checkbox",
                      defaultChecked: this.props.defaultChecked,
                      checked: this.props.checked,
                      value: this.props.value,
                      disabled: this.props.disabled,
                      onClick: this.props.onClick ? this.props.onClick : null,
                      onChange: this.props.onChange
                        ? this.props.onChange
                        : null,
                    }),
                    c.a.createElement(
                      "span",
                      {
                        className: "vx-checkbox vx-checkbox-".concat(
                          this.props.size ? this.props.size : "md"
                        ),
                      },
                      c.a.createElement(
                        "span",
                        { className: "vx-checkbox--check" },
                        this.props.icon
                      )
                    ),
                    c.a.createElement("span", null, this.props.label)
                  );
                },
              },
            ]),
            t
          );
        })(c.a.Component);
      a.a = m;
    },
  },
]);
//# sourceMappingURL=212.eaf724eb.chunk.js.map
