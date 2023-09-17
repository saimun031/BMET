<template>
  <div class="dashboard">
    <div class="dashboard-left">
      <the-sidebar />
    </div>
    <div class="dashboard-right">
      <div class="dashboard-top">
        <TheHeader />
        <breadcrumb class="hedder mt-4" :crumbs="crumbs" @selected="selected" />
      </div>

      <div class="dashboard-main">
        <hr />
        <div class="name-head">
          <info></info>
        </div>
        <hr class="line" />

        <div class="cards mt-4">
          <div class="grid-container">
            <!-- <div class="cards1"><img src="../../../assets/img/Group4.png" alt=""><p></p></div> -->
            <div class="cards3">
              <img src="../../../assets/img/Group41.png" alt="" />
              <p>নথি ফর্ম</p>
            </div>
            <div class="cards3">
              <img src="../../../assets/img/Group41.png" alt="" />
              <p>আবেদন ফর্ম</p>
            </div>
            <div class="cards11">
              <img src="../../../assets/img/Group4.png" alt="" />
              <p>নোটশীট</p>
            </div>
            <div class="cards3">
              <img src="../../../assets/img/Group41.png" alt="" />
              <p>অঙ্গীকারনামা</p>
            </div>
            <div class="cards22">
              <img src="../../../assets/img/Group41.png" alt="" />
              <p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p>
            </div>
          </div>
          <!-- <img class="line-dot" src="../../../assets/img/Group5.png" alt=""> -->
        </div>

        <div class="form-head mt-4">
          <p class="f1">Form No. : <strong>A253T5</strong></p>
          <p class="f2">Gender : <strong>Male</strong></p>
          <p class="f3">Country : <strong>Dubai</strong></p>
        </div>

        <div class="body-main">
          <h3 class="center">
            একক বহির্গমন ছাড়পত্রের পুটআপশীট ও ডাটাএন্ট্রি ফরম
          </h3>
          <div class="table overflow">
            <p>
              ...। রি/এজেন্সি.................. (আর এল-০০০) এর স্বত্ত্বাধিকারী
              মালেশিয়াগামী ৩৭ (আটত্রিশ) জন পুরুষ কর্মীর অনুকুলে একক বহির্গমন
              ছাড়পত্র গ্রহনের জন্য আবেদনপত্র সহনিন্মবর্নীত কাগজ দাখিল করেছেন।
            </p>
            <div class="overflow">
              <table class="table table-bordered" id="tbl">
                <tr>
                  <td class="td">
                    ক) রিক্রুটিং এজেন্সীর আবেদনপত্র (পতাকা- ‘ক’) ।
                    <br /><br />
                    খ) আয়কর চালান, কল্যাণ ফী ও বীমা এবং স্মার্টকার্ড ফি বাবদ
                    পে-অর্ডারের <br />ফটোকপি (পতাকা- ‘খ’) । <br /><br />
                    গ) পুট-আপ লিষ্ট (পতাকা- ‘গ’) ।
                    <br />
                    ঘ) রি/এজেন্সী কর্তৃক ৩০০/- টাকার নন-জুডিশিয়াল স্ট্যাম্পে
                    অঙ্গীকারনামা <br />(পতাকা- ‘ঘ’) । <br /><br />
                    ঙ) ইনজাজ কপির ফটোকপি (পতাকা- ‘ঙ’) ।
                    <br /><br />
                    চ) কর্মীর পাসপোর্ট ফটোকপি (পতাকা- ‘চ’) ।
                  </td>

                  <td class="td">
                    ছ) ভিসার কপি (পতাকা ‘ছ’) ।
                    <br /><br />
                    জ) চুক্তিপত্রের ফটোকপি (পতাকা ‘জ’) ।
                    <br /><br />
                    ঝ) রিক্রুটিং এজেন্সীর লাইসেন্সের মেয়াদ ৩১/১২/২০২৫ তারিখ
                    পর্যন্ত বলবৎ আছে <br />(পতাকা- ‘ঝ’) । <br /><br />
                    ঞ) প্রশিক্ষণ সনদপত্র - (পতাকা- ‘ঞ’) ।
                    <br /><br />
                    ট) কর্মীর ডাটাশীট - (পতাকা- ‘ট’) ।
                  </td>
                </tr>
              </table>
            </div>

            <div class="overflow">
              <h3>...। কর্মীর বিবরন ঃ</h3>
              <table class="table table-bordered overflow" id="tbl1">
                <thead>
                  <tr>
                    <td>ক্র.</td>
                    <td>কর্মীর নাম ও রেজিঃ</td>
                    <td>পাসপোর্ট নং</td>
                    <td>ভিসা নং</td>
                    <td>ভিসা ইস্যু ও মেয়াদ</td>
                    <td>পাসপোর্ট ইস্যু ও মেয়াদ</td>
                    <td>জন্মতারিখ</td>
                    <td>পেশা ও বেতন</td>
                    <td>কোম্পানীর নাম</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <th>
                      MD LITON HOSSAIN<br />
                      MGM20220505113G
                    </th>
                    <th>A04608523</th>
                    <th>EF3922446</th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>18/06/1992</th>
                    <th>
                      Home Labor<br />
                      (5000)
                    </th>
                    <th>Salah bin Bjeed <br />Shawon Al-Magali</th>
                  </tr>
                  <tr>
                    <th>02</th>
                    <th>
                      MD LITON HOSSAIN<br />
                      MGM20220505113G
                    </th>
                    <th>A04608523</th>
                    <th>EF3922446</th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>18/06/1992</th>
                    <th>
                      Home Labor<br />
                      (5000)
                    </th>
                    <th>Salah bin Bjeed <br />Shawon Al-Magali</th>
                  </tr>
                  <tr>
                    <th>03</th>
                    <th>
                      MD LITON HOSSAIN<br />
                      MGM20220505113G
                    </th>
                    <th>A04608523</th>
                    <th>EF3922446</th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>18/06/1992</th>
                    <th>
                      Home Labor<br />
                      (5000)
                    </th>
                    <th>Salah bin Bjeed <br />Shawon Al-Magali</th>
                  </tr>
                  <tr>
                    <th>04</th>
                    <th>
                      MD LITON HOSSAIN<br />
                      MGM20220505113G
                    </th>
                    <th>A04608523</th>
                    <th>EF3922446</th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>18/06/1992</th>
                    <th>
                      Home Labor<br />
                      (5000)
                    </th>
                    <th>Salah bin Bjeed <br />Shawon Al-Magali</th>
                  </tr>
                  <tr>
                    <th>05</th>
                    <th>
                      MD LITON HOSSAIN<br />
                      MGM20220505113G
                    </th>
                    <th>A04608523</th>
                    <th>EF3922446</th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>
                      31/03/2018<br />
                      31/03/2023
                    </th>
                    <th>18/06/1992</th>
                    <th>
                      Home Labor<br />
                      (5000)
                    </th>
                    <th>Salah bin Bjeed <br />Shawon Al-Magali</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow">
              <h3>...। প্রশিক্ষন সনদের বিবরনঃ-</h3>
              <table class="table table-bordered overflow" id="tbl1">
                <thead>
                  <tr>
                    <td>ক্র.</td>
                    <td>কর্মীর নাম</td>
                    <td>পাসপোর্ট নং</td>
                    <td>প্রশিক্ষণসনদ নং</td>
                    <td>ব্যাচ নং</td>
                    <td>সিরিয়াল</td>
                    <td>টিটিসির নাম</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>CHATTROGRAM</th>
                  </tr>
                  <tr>
                    <th>02</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>SYLHET</th>
                  </tr>
                  <tr>
                    <th>03</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>PABNA</th>
                  </tr>
                  <tr>
                    <th>04</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>MANIKGANJ</th>
                  </tr>
                </tbody>
              </table>

              <br />
              <table class="table table-bordered overflow" id="tbl1">
                <tbody>
                  <tr>
                    <th>05</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th class="th">110</th>
                    <th>CHATTROGRAM</th>
                  </tr>
                  <tr>
                    <th>06</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>SYLHET</th>
                  </tr>
                  <tr>
                    <th>07</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>PABNA</th>
                  </tr>
                  <tr>
                    <th>08</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>Malaysia-2554417</th>
                    <th>MGM20220505113G</th>
                    <th>110</th>
                    <th>MANIKGANJ</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow">
              <h3>...। প্রশিক্ষন সনদের বিবরনঃ-</h3>
              <table class="table table-bordered overflow" id="tbl1">
                <thead>
                  <tr>
                    <td>ক্র.</td>
                    <td>কর্মীর নাম</td>
                    <td>পাসপোর্ট নং</td>
                    <td>ব্যাংক নাম</td>
                    <td>হিসাব নং</td>
                    <td>মেডিকেল নাম</td>
                    <td>ফিট কোড</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>AGRANI BANK</th>
                    <th>2020220505113</th>
                    <th>Ferdous Medical Centre</th>
                    <th>05/02/08</th>
                  </tr>
                  <tr>
                    <th>02</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>AGRANI BANK</th>
                    <th>2020220505113</th>
                    <th>Ferdous Medical Centre</th>
                    <th>05/02/08</th>
                  </tr>
                  <tr>
                    <th>03</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>AGRANI BANK</th>
                    <th>2020220505113</th>
                    <th>Ferdous Medical Centre</th>
                    <th>05/02/08</th>
                  </tr>
                  <tr>
                    <th>04</th>
                    <th>MD LITON HOSSAIN</th>
                    <th>A04608523</th>
                    <th>AGRANI BANK</th>
                    <th>2020220505113</th>
                    <th>Ferdous Medical Centre</th>
                    <th>05/02/08</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow">
              <h3>...। প্রশিক্ষন সনদের বিবরনঃ-</h3>
              <table class="table table-bordered overflow" id="tbl1">
                <thead>
                  <tr>
                    <td>ফি সমূহ</td>
                    <td>জন প্রতি হার (টাকায়)</td>
                    <td>মোট কর্মীর সংখ্যা</td>
                    <td>মোট টাকা</td>
                    <td>পে-অর্ডার নং</td>
                    <td>তারিখ</td>
                    <td>ব্যাংকের নাম ও শাখা</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>কল্যাণ ও বীমা</td>
                    <td>৪,৫০০/-</td>
                    <td></td>
                    <td>১,৭১,০০০/-</td>
                    <td>0940528</td>
                    <td>02/05/2023</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>স্মার্টকার্ড</td>
                    <td>৪,৫০০/-</td>
                    <td>৩৮ জন</td>
                    <td>১,৭১,০০০/-</td>
                    <td>0940528</td>
                    <td>02/05/2023</td>
                    <td>উত্তরা ব্যাংক লিঃ, ফকিরাপুল</td>
                  </tr>
                  <tr>
                    <td>আয়কর চালান</td>
                    <td>৪,৫০০/-</td>
                    <td></td>
                    <td>১,৭১,০০০/-</td>
                    <td>0940528</td>
                    <td>02/05/2023</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="text1">
          ...। দাখিল্কৃত ভিসার সঠিকতা, ধরণ, পেশা, নিষিদ্ধ কোম্পানীর ভিসা ও ইজাজ
          কপির Advice/Lot এ ভিসার সংখ্যা এর অধিক আছে কিনা এই বিষয়ে মতাতের জন্য
          অনুবাদকের নিকট প্রেরণ হলোঃ
        </div>
        <br />
        <div class="bracket"></div>
        <p class="bracket">.(..........).</p>
        <p>...। প্রধান সহকারীঃ</p>
        <br />
        <div class="button">
          <div class="btn1">
            <router-link to="/dashboard/ongikarnama">
              <!-- <router-link to="/pendinglist/nothiform"> -->
              <button>Approve & Next</button>
            </router-link>
          </div>
          <div class="btn3">
            <router-link to="/dashboard/ongikarnama">
              <!-- <router-link to="/pendinglist/nothiform"> -->
              <button>Approve All</button>
            </router-link>
          </div>

          <!-- <div class="btn2">
  <router-link to="/dashboard">
  <button><strong>Cancel</strong> </button>
          </router-link>
        </div> -->
        </div>
        <br /><br /><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
//   import nothiform from "./pendinglists/nothiform.vue"
import info from "../pendinglists/info.vue";
import progressbar from "../../../components/progressbar.vue";
import breadcrumb from "../../../components/breadcrumb.vue";
export default {
  components: {
    // nothiform,
    info,
    progressbar,
    breadcrumb,
  },
  name: "App",
  data() {
    return {
      crumbs: ["Pending Application for Approval // Home"],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
};
</script>

<style scoped src="../../../assets/css/putupshit.css"></style>
