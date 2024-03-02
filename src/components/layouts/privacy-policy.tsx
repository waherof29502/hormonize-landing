import React from 'react';
import { PROJECTITEM } from '@/src/constants';
import Image from 'next/image';
import Button from '../button';
import AwardImage from '@/public/images/about/2-1.png';
import GrayBg from '@/public/images/about/2-2.png';
import Signature from '@/public/images/about/3-1.png';

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className="text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow">
                PRIVACY
              </span>
              <span className="-mt-4 text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow">
                POLICY
              </span>
            </div>
            <div className="w-3/4 h-full bg-privacyHero bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
      {/* hero mobile layout */}
      <div className="3md:hidden flex flex-col w-full min-h-[90vh] mt-[14vh]">
        <div className="w-full h-full flex justify-center items-center py-10">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <span className="text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow">PRIVACY</span>
            <span className="text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow">POLICY</span>
          </div>
        </div>
        <div className="w-full h-[58vh] bg-mobilePrivacyHero bg-cover bg-no-repeat" />
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="relative hidden 3md:flex flex-col w-full items-center min-h-[90vh] gap-y-6 -mt-20">
        <div className="w-[75%] flex flex-col gap-y-6 pb-10">
          <h2 className="text-primary text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">隱私權政策</h2>
          <span className="text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-sans font-[350] leading-[2.5rem]">
            歡迎來到寬堂官方網站，為了讓您能夠安心的使用本網站的各項
            服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
            <br />
            <br />
            一、隱私權保護政策的適用範圍
            <br />
            隱私權保護政策內容，包括本網站如何處理在您使用網站服務時
            收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            <br />
            <br />
            二、個人資料的蒐集、處理及利用方式
            <br />
            •
            當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            <br />
            • 本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
            <br />
            • 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP
            位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
            <br />
            •
            為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
            <br />
            • 您可以隨時向我們提出請求，以更正或刪除本網站所蒐集您錯誤或不完整的個人資料。
            <br />
            <br />
            三、資料之保護
            <br />
            •
            本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
            <br />
            •
            如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
            <br />
            <br />
            四、網站對外的相關連結本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
            <br />
            <br />
            五、與第三人共用個人資料之政策本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
            前項但書之情形包括不限於：
            <br />
            • 經由您書面同意。
            <br />
            • 法律明文規定。
            <br />
            • 為免除您生命、身體、自由或財產上之危險。
            <br />
            •
            與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無
            從識別特定之當事人。
            <br />
            •
            當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
            <br />
            • 有利於您的權益。
            <br />
            • 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
            <br />
            <br />
            六、Cookie 之使用
            <br />
            為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，若您不願接受 Cookie
            的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie
            的寫入，但可能會導致網站某些功能無法正常執行 。<br />
            <br />
            七、隱私權保護政策之修正
            <br />
            本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款 將刊登於網站上。
            <br />
            <br />
          </span>
        </div>
      </div>
      {/* project detail*/}
      {/* mobile layout */}
      <div className="3md:hidden flex flex-col w-full min-h-screen gap-y-6 px-7">
        <div className="flex flex-col gap-y-5 mt-2 pb-10">
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal text-shadow leading-[2.375rem]">
            隱私權政策
          </h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem] font-sans font-[350] leading-[2.25rem] tracking-[0.8px] text-shadow">
            歡迎來到寬堂官方網站，為了讓您能夠安心的使用本網站的各項
            服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
            <br />
            <br />
            一、隱私權保護政策的適用範圍
            <br />
            隱私權保護政策內容，包括本網站如何處理在您使用網站服務時
            收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            <br />
            <br />
            二、個人資料的蒐集、處理及利用方式
            <br />
            •
            當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            <br />
            • 本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
            <br />
            • 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP
            位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
            <br />
            •
            為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
            <br />
            • 您可以隨時向我們提出請求，以更正或刪除本網站所蒐集您錯誤或不完整的個人資料。
            <br />
            <br />
            三、資料之保護
            <br />
            •
            本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
            <br />
            •
            如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
            <br />
            <br />
            四、網站對外的相關連結本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
            <br />
            <br />
            五、與第三人共用個人資料之政策本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
            前項但書之情形包括不限於：
            <br />
            • 經由您書面同意。
            <br />
            • 法律明文規定。
            <br />
            • 為免除您生命、身體、自由或財產上之危險。
            <br />
            •
            與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無
            從識別特定之當事人。
            <br />
            •
            當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
            <br />
            • 有利於您的權益。
            <br />
            • 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
            <br />
            <br />
            六、Cookie 之使用
            <br />
            為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，若您不願接受 Cookie
            的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie
            的寫入，但可能會導致網站某些功能無法正常執行 。<br />
            <br />
            七、隱私權保護政策之修正
            <br />
            本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款 將刊登於網站上。
            <br />
            <br />
          </span>
        </div>
      </div>
    </section>
  );
}
