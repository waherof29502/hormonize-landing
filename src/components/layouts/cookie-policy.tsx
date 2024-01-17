import React from 'react';
import {PROJECTITEM} from '@/src/constants';
import Image from 'next/image';
import Button from '../button';
import AwardImage from '@/public/images/about/2-1.png';
import GrayBg from '@/public/images/about/2-2.png'
import Signature from '@/public/images/about/3-1.png'

export default function CookiePolicy() {
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
    <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>COOKIES</span>
              <span className='-mt-4 text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>POLICY</span>
            </div>
            <div className="w-3/4 h-full bg-privacyHero bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
      {/* hero mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-[90vh] mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow'>COOKIES</span>
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow'>POLICY</span>
            </div>
          </div>
        <div className="w-full h-[58vh] bg-mobilePrivacyHero bg-cover bg-no-repeat" /> 
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="relative hidden 3md:flex flex-col w-full items-center min-h-[90vh] gap-y-6 -mt-20">
      <div className="w-[75%] flex flex-col gap-y-6 pb-10">
      <h2 className="text-primary text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">Cookies 政策</h2>
      <span className="text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-sans font-[350] leading-[2.5rem]">寬堂官方網站為提供更完善的服務，在此將依個人資料保護法之規定，使用 Cookie 或類似技術，管理及記錄您於本網站中的活動紀錄，包括個人化服務與流量分析。這些 Cookie 包括持久性Cookie 與暫時性 Cookie，以確保提供給您更好服務品質。<br/><br/>

一、Cookies為資訊系統識別使用者而記錄於使用者硬碟之簡短資訊，本網站所記錄之cookie並不包含足以辨識使用者個人身分的資料，而是記錄使用者在本網頁中設定的個人服務等資料。<br/><br/>

二、網站伺服器僅能讀取使用者cookie中在本網站上的活動記錄，無法讀取使用者在其他網站的活動記錄。您所發現任何與寬堂官方網站連結的廣告商或其他網站也有可能會蒐集您的個人資料，本隱私權政策並無適用該廣告商或其他網站，也無法控制它們的行為。<br/><br/>

三、資料之保護<br/>
本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。<br/>
如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。<br/><br/>

四、個人資料利用準則：<br/>
於寬堂官方網站內的單純瀏覽或檔案下載，並不會蒐集得識別個人的有關資料。<br/>
於寬堂官方網站所可能會記錄的使用者上站記錄，如IP位址、進站時間、進站瀏覽頁面、上傳及下載檔案等，為提升寬堂官方網站服務品質目的，所作的網站、網頁的分析；但發現疑似非法與犯罪行為時不在此限。<br/>
除處理營業相關事務、政府單位調查或法律規定外，未經您的同意或授權或其他往來契約約定，不會提供您的個人資料予無關第三人；於寬堂官方內部也僅有因職務上必要接觸之員工，得以接觸您的個人資料。<br/>
若有足夠理由相信揭露該資訊係屬辨識或與您連絡所必要、或違反寬堂官方網站或產品之使用者條款等時、或因您的行為對於寬堂官方之網站、權利、產品、其他用戶造成損害或干擾時、或有足夠理由相信您涉及詐欺，或其他違法、違約行為時、或受損害干擾人因而對您採取法律行動時，寬堂保留公開您個人資訊的權利予特定人。<br/>
個人資料利用地區：於寬堂官方網站須填入個人資料時，有任意填入個人資料部分時，您可以自由選擇是否提供，但您同時也可能將無法使用需要相關資料方得使用之服務；此外若有發生帳號遭冒用、資料遭盜用時，因您未提供或提供不實資料情形時，以致於無法確認您的身分真實性，寬堂官方將無法處理您的請求。<br/>
個人資料您可主張的權利內容：您的個人資料經過寬堂官方確認係本人下，得主張請求如下事項：得請求查詢了解您的個人資料內容、得請求補充或更正、刪除。如果您不願意將您的個人資料提供予寬堂官方及其關係企業繼續使用，您可以向寬堂官方客服連絡，寬堂官方就您的個人資料將停止繼續使用。同時您務必注意並了解，執行刪除個人資料的需求時，同時將相關服務的終止。您也必須了解，某些時候，基於法律適用原因或法規許可下，為了遵守法律義務、紛爭解決，以及執行您與寬堂官方的協議，寬堂官方可能無法刪除，將繼續持有您的個人資料。<br/>
寬堂官方客戶服務連絡方式：如果您有任何的問題，或希望提出申訴，或對您的個人資料內容有所請求增、減、刪除，請您透過電子郵件與寬堂官方客戶服務部門連絡。<br/>
收件人：寬堂官方客戶服務部門<br/>
電子郵件：ching@harmonizedesign.com<br/><br/>

五、與第三人共用個人資料之政策<br/>
本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於：<br/>
經由您書面同意。<br/>
法律明文規定。<br/>
為免除您生命、身體、自由或財產上之危險。<br/>
與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。<br/>
當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。<br/>
有利於您的權益。<br/>
本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。<br/><br/>

六、個人資料利用準則為：<br/>
寬堂官方之隱私權保護政策，係依照法律規定而行使，所以本隱私權政策也將隨法規命令異動進行修改；倘寬堂官方於本隱私權政策有變更時，將於官網更新內容，當公告變更後該更新內容即刻生效。為避免您遺漏了資訊，請您不定期回來檢視本政策，以確保您隨時了解有關本隱私權政策的內容。當寬堂官方隱私權政策更新公布後，如您繼續使用寬堂官方所提供相關服務時，即視為您已閱讀、了解並同意所有修改。<br/><br/>
</span>
      </div>
      </div>
        {/* project detail*/}
        {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-screen gap-y-6 px-7">
        <div className="flex flex-col gap-y-5 mt-2 pb-10">
        <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal text-shadow leading-[2.375rem]">Cookies 政策</h2>
        <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem] font-sans font-[350] leading-[2.25rem] tracking-[0.8px] text-shadow">寬堂官方網站為提供更完善的服務，在此將依個人資料保護法之規定，使用 Cookie 或類似技術，管理及記錄您於本網站中的活動紀錄，包括個人化服務與流量分析。這些 Cookie 包括持久性Cookie 與暫時性 Cookie，以確保提供給您更好服務品質。<br/><br/>

一、Cookies為資訊系統識別使用者而記錄於使用者硬碟之簡短資訊，本網站所記錄之cookie並不包含足以辨識使用者個人身分的資料，而是記錄使用者在本網頁中設定的個人服務等資料。<br/><br/>

二、網站伺服器僅能讀取使用者cookie中在本網站上的活動記錄，無法讀取使用者在其他網站的活動記錄。您所發現任何與寬堂官方網站連結的廣告商或其他網站也有可能會蒐集您的個人資料，本隱私權政策並無適用該廣告商或其他網站，也無法控制它們的行為。<br/><br/>

三、資料之保護<br/>
本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。<br/>
如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。<br/><br/>

四、個人資料利用準則：<br/>
於寬堂官方網站內的單純瀏覽或檔案下載，並不會蒐集得識別個人的有關資料。<br/>
於寬堂官方網站所可能會記錄的使用者上站記錄，如IP位址、進站時間、進站瀏覽頁面、上傳及下載檔案等，為提升寬堂官方網站服務品質目的，所作的網站、網頁的分析；但發現疑似非法與犯罪行為時不在此限。<br/>
除處理營業相關事務、政府單位調查或法律規定外，未經您的同意或授權或其他往來契約約定，不會提供您的個人資料予無關第三人；於寬堂官方內部也僅有因職務上必要接觸之員工，得以接觸您的個人資料。<br/>
若有足夠理由相信揭露該資訊係屬辨識或與您連絡所必要、或違反寬堂官方網站或產品之使用者條款等時、或因您的行為對於寬堂官方之網站、權利、產品、其他用戶造成損害或干擾時、或有足夠理由相信您涉及詐欺，或其他違法、違約行為時、或受損害干擾人因而對您採取法律行動時，寬堂保留公開您個人資訊的權利予特定人。<br/>
個人資料利用地區：於寬堂官方網站須填入個人資料時，有任意填入個人資料部分時，您可以自由選擇是否提供，但您同時也可能將無法使用需要相關資料方得使用之服務；此外若有發生帳號遭冒用、資料遭盜用時，因您未提供或提供不實資料情形時，以致於無法確認您的身分真實性，寬堂官方將無法處理您的請求。<br/>
個人資料您可主張的權利內容：您的個人資料經過寬堂官方確認係本人下，得主張請求如下事項：得請求查詢了解您的個人資料內容、得請求補充或更正、刪除。如果您不願意將您的個人資料提供予寬堂官方及其關係企業繼續使用，您可以向寬堂官方客服連絡，寬堂官方就您的個人資料將停止繼續使用。同時您務必注意並了解，執行刪除個人資料的需求時，同時將相關服務的終止。您也必須了解，某些時候，基於法律適用原因或法規許可下，為了遵守法律義務、紛爭解決，以及執行您與寬堂官方的協議，寬堂官方可能無法刪除，將繼續持有您的個人資料。<br/>
寬堂官方客戶服務連絡方式：如果您有任何的問題，或希望提出申訴，或對您的個人資料內容有所請求增、減、刪除，請您透過電子郵件與寬堂官方客戶服務部門連絡。<br/>
收件人：寬堂官方客戶服務部門<br/>
電子郵件：ching@harmonizedesign.com<br/><br/>

五、與第三人共用個人資料之政策<br/>
本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於：<br/>
經由您書面同意。<br/>
法律明文規定。<br/>
為免除您生命、身體、自由或財產上之危險。<br/>
與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。<br/>
當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。<br/>
有利於您的權益。<br/>
本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。<br/><br/>

六、個人資料利用準則為：<br/>
寬堂官方之隱私權保護政策，係依照法律規定而行使，所以本隱私權政策也將隨法規命令異動進行修改；倘寬堂官方於本隱私權政策有變更時，將於官網更新內容，當公告變更後該更新內容即刻生效。為避免您遺漏了資訊，請您不定期回來檢視本政策，以確保您隨時了解有關本隱私權政策的內容。當寬堂官方隱私權政策更新公布後，如您繼續使用寬堂官方所提供相關服務時，即視為您已閱讀、了解並同意所有修改。<br/><br/></span>
        </div>
        </div>
    </section>
  );
}
