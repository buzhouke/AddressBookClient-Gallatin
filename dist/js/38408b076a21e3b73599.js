(window.webpackJsonp=window.webpackJsonp||[]).push([["main~mobile"],{"4YvN":function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var o,r,i=n("yftM"),a=n("0acT"),c=n("kiQV"),s=n("pIRP"),u=n("8MrD");function d(e,t){var n;try{const t=JSON.parse(e),o={type:null==t?void 0:t.type,source:null==t?void 0:t.source,definitionId:null==t?void 0:t.definitionId,occurrenceId:null==t?void 0:t.occurrenceId,reportId:null==t?void 0:t.reportId},a=null!==(n=null==t?void 0:t.source)&&void 0!==n?n:r.ActivityFeed;s.f.setCommonProperty({"Panel.DeepLinkSourceType":a,"Panel.DeepLinkType":null==t?void 0:t.type}),s.f.logUserBiAction(s.c.AppBoot,s.e.AppBootDispatchDeepLink,a,o),s.f.markScenario(s.c.AppBoot,s.e.AppBootDispatchDeepLink,i.g.Success,{dataBag:o}),null==t||t.type.toLowerCase(),s.f.logTraceError(s.a.DeepLink,e)}catch(e){s.f.logTraceException(s.a.DeepLink,{error:e})}}!function(e){e.DefinitionAssigned="definitionassigned",e.DefinitionReceived="definitionreceived",e.DefinitionOwnerChanged="definitionownerchanged",e.DefinitionCollaboratorChanged="definitioncollaboratorchanged",e.ReportReceived="reportreceived",e.ReportLiked="reportliked",e.ReportEdited="reportedited",e.ReportCommented="reportcommented",e.OccurrenceEnding="occurrenceending",e.OccurrenceManualReminder="occurrencemanualreminder",e.ReviewOccurrenceReport="reviewoccurrencereport",e.ReviewOccurrence="reviewoccurrence",e.RemindSubmit="remindsubmit",e.EditDefinition="editdefinition"}(o||(o={})),function(e){e.TaskModule="TaskModule",e.ActivityFeed="ActivityFeed",e.GeneratedShareLink="GeneratedShareLink",e.AdaptiveCard="AdaptiveCard"}(r||(r={}));n("ERkP");var l,p=n("LiEJ");n("Jg5f"),n("lqvn");!function(e){e.MobileReportLikedButton="MobileReportLikedButton",e.AggregatedViewDemoCard="AggregatedViewDemoCard",e.PersonalAppValidUsage="PersonalAppValidUsage",e.TaskModuleValidUsage="TaskModuleValidUsage",e.UserHasData="UserHasData",e.DismissWelcomeUpdateSection="DismissWelcomeUpdateSection",e.DismissWelcomeUpdateSectionWithCategory="DismissWelcomeUpdateSectionWithCategory",e.FeedbackBubble="FeedbackBubble"}(l||(l={}));!function(e){const t=new p.a(function(e){return function(e){try{if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))return[];return t.filter((e=>"string"==typeof e&&e in l))}catch(e){return[]}}(localStorage.getItem(e))}(e));t.subscribe((t=>function(e,t){if(t.length){const n=JSON.stringify(t);localStorage.setItem(e,n)}else localStorage.removeItem(e)}(e,t)))}("Flags");var f=n("SGJe"),h=n("H8PI"),m=n("TJux"),g=n("9hZ6");function v(e){if(!function(e){if("/"===e.pathname)return!0;const t=Object(h.f)(e.pathname,g.a.HomePage);return!!t&&0===Object.keys(t.params).length}(m.a.location))return;const t=S(e),n=localStorage.getItem(t);if(!n)return;let o;try{o=JSON.parse(n)}catch(e){return}if(Date.now()-o.timestamp>18e5)return void localStorage.removeItem(t);const r=Object(f.f)(o.pathString);k(r)&&m.a.push(r)}const b="LastPathV2";function S(e){return e?`LastPathV2-UserId:${e}`:b}function k(e){const t=e.pathname;return!!t&&[g.a.HomePage].some((e=>Object(h.f)(e,t)))}n("apXe"),n("NkTa"),n("YCKj");var A,I=n("k2tF"),P=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};!function(e){e[e.Member=0]="Member",e[e.Guest=1]="Guest"}(A||(A={}));var R=n("TktC"),w=n("fPKC"),B=n("dERd"),T=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};const O=u.l.get(u.h.TenantId),y=u.l.get(u.h.SubEntityId);function E(e,t){var n,o,r,c,l,p,f,h,m,g,v,b,S,k;return T(this,void 0,void 0,(function*(){const A=u.l.get(u.h.Version);u.n&&Object(a.k)({getContext:u.d,getAuthToken:u.e}),e.mark(s.e.AppBootStarted);const I=yield Object(a.h)();e.mark(s.e.AppBootHostContextInitialized,i.g.Success,{dataBag:{theme:I.app.theme,parameterVersion:A,locale:I.app.locale}}),s.f.setCommonProperty({"AppInfo.SessionId":I.app.host.sessionId,"AppInfo.Locale":I.app.locale,"UserInfo.LicenseType":null===(n=I.user)||void 0===n?void 0:n.licenseType,"UserInfo.Ring":I.app.host.ringId,"UserInfo.Id":null===(o=I.user)||void 0===o?void 0:o.id,"UserInfo.TenantId":null===(c=null===(r=I.user)||void 0===r?void 0:r.tenant)||void 0===c?void 0:c.id,"UserInfo.TenantRole":null===(l=I.team)||void 0===l?void 0:l.userRole,"TeamInfo.GroupId":null===(p=I.team)||void 0===p?void 0:p.groupId,ConversationId:(null===(f=I.chat)||void 0===f?void 0:f.id)||(null===(h=I.channel)||void 0===h?void 0:h.id)||"N/A",InvokedContext:(null===(m=I.chat)||void 0===m?void 0:m.id)?i.b.Chat:(null===(g=I.channel)||void 0===g?void 0:g.id)?i.b.Team:i.b.Global,EntryPoint:C(I),"Thread.Type":j(I)}),O!==(null===(b=null===(v=I.user)||void 0===v?void 0:v.tenant)||void 0===b?void 0:b.id)&&(null===(k=null===(S=I.user)||void 0===S?void 0:S.tenant)||void 0===k?void 0:k.id)?s.f.setCompliantAriaClient(I.user.tenant.id).then((()=>{e.mark(s.e.AppBootLoggerInitialized,i.g.Success),s.f.activeLogger()})):s.f.activeLogger(),function(e,t){if(!location.pathname.endsWith("/"))return;if(!t)return void s.f.logTraceWarning(s.a.AppBoot,"hostClientType is empty");const n=[a.a.ios,a.a.android,"ipados"];e?n.includes(t)||(s.f.logTraceError(s.a.AppBoot,`${t} mismatches Mobile entry, UA: ${navigator.userAgent}`),s.f.failScenario(s.c.AppBoot),window.location.pathname=w.b):n.includes(t)&&(s.f.logTraceError(s.a.AppBoot,`${t} mismatches Desktop entry, UA: ${navigator.userAgent}`),s.f.failScenario(s.c.AppBoot),window.location.pathname=w.i)}(t,I.app.host.clientType),y||A||!I.page.subPageId||d(I.page.subPageId)}))}function C(e){var t,n;if((null===(t=e.chat)||void 0===t?void 0:t.id)||(null===(n=e.channel)||void 0===n?void 0:n.id)){const e=window.location.hash;if(e.includes("workflow/commands"))return i.a.Workflow;return e==="#"?i.a.ComposeExtension:i.a.AdaptiveCard}return i.a.PersonalApp}function L(){return T(this,void 0,void 0,(function*(){const e=u.l.get(u.h.UserId);Object(a.l)((t=>(s.f.logUserBiAction(s.c.AppBoot,s.e.AppExit,i.f.WorkReport,void 0,!0),s.f.flushLogs(t),!y&&e&&function(e){if(!k(m.a.location))return;const t=S(e),n={pathString:Object(f.e)(m.a.location),timestamp:Date.now()};localStorage.setItem(t,JSON.stringify(n))}(e),!0)))}))}function D(e){return T(this,void 0,void 0,(function*(){let t;try{!function(){T(this,void 0,void 0,(function*(){const e=u.l.get(u.h.UserId);!y&&e&&v(e)}))}();const n=function(){return P(this,void 0,void 0,(function*(){try{const e=yield Object(a.g)(u.b);if(Object(I.a)(e).acct!==A.Guest)return;const t=Object(g.b)(g.a.HomePage);m.a.push(t,{replace:!0})}catch(e){s.f.logTraceError(s.a.CheckUserRole,`error when trying to check userRole, ${e}`)}}))}(),o=function(){return T(this,void 0,void 0,(function*(){const e=u.l.get(u.h.UserId),t=u.l.get(u.h.RingId),n=u.l.get(u.h.Locale),o=u.l.get(u.h.ClientType);s.f.setCommonProperty({Source:"Client","Bot.Id":u.k,"App.Id":u.i,"App.Name":"AddressBook","AppInfo.ClientType":o,"AppInfo.Locale":n,"AppInfo.Version":c.a,"UserInfo.Ring":t,"UserInfo.Id":e,"UserInfo.TenantId":O}),O&&(yield s.f.setCompliantAriaClient(O),s.f.markScenario(s.c.AppBoot,s.e.AppBootLoggerInitialized,i.g.Success))}))}();t=s.f.createScenario(s.c.AppBoot),s.f.logUserBiView(i.d.AppNav,i.e.Main,i.f.WorkReport),function(e){if(y){const e=new URL(window.location.href);e.searchParams.delete(u.h.SubEntityId),window.history.replaceState(null,"",e.toString()),d(y)}}();const r=E(t,e);Object(B.b)(),L(),document.querySelectorAll("noscript").forEach((e=>{e.remove()})),yield Promise.all([o,r,n]),t.mark(s.e.AppBootSuccess,i.g.Success),t.stop()}catch(e){s.f.activeLogger(),s.f.logTraceError(s.a.AppBoot,`${e}`),null==t||t.mark(s.e.AppBootFailedWithError,i.g.Failure),null==t||t.fail(),Object(a.i)({reason:a.d.FailedReason.Other,message:s.f.sessionId})}finally{s.f.flushLogs((()=>{}))}}))}function j(e){var t,n,o,r;return(null===(t=e.chat)||void 0===t?void 0:t.id)?Object(R.a)(e.chat.id,null===(n=e.team)||void 0===n?void 0:n.groupId,null===(o=e.channel)||void 0===o?void 0:o.id)?i.h.NewChat:"48:notes"===e.chat.id?i.h.SelfChat:e.chat.id.includes("meeting")?i.h.Meeting:e.chat.id.includes("unq.gbl.spaces")?i.h.OneOnOneChat:i.h.GroupChat:(null===(r=e.channel)||void 0===r?void 0:r.id)?i.h.Channel:i.h.NA}},"5ssl":function(e){e.exports=JSON.parse('{"en":"en-US","en-ai":"en-GB","en-bm":"en-GB","en-io":"en-GB","en-vg":"en-GB","en-ky":"en-GB","en-fk":"en-GB","en-gi":"en-GB","en-gg":"en-GB","en-im":"en-GB","en-je":"en-GB","en-ms":"en-GB","en-pn":"en-GB","en-sh":"en-GB","en-tc":"en-GB","fr":"fr-FR","fr-pm":"fr-CA","ca":"ca-ES","es":"es-ES","pt":"pt-PT","zh":"zh-CN","zh-hans":"zh-CN","zh-hans-hk":"zh-TW","zh-hans-mo":"zh-TW","zh-hant":"zh-TW","zh-hk":"zh-TW","zh-mo":"zh-TW","pseudo":"qps-PLOC"}')},"8MrD":function(e,t,n){"use strict";var o,r,i,a;n.d(t,"h",(function(){return a})),n.d(t,"m",(function(){return s})),n.d(t,"p",(function(){return u})),n.d(t,"o",(function(){return d})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return m})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return k})),n.d(t,"n",(function(){return A})),function(e){e.Version="version",e.ClientType="clientType",e.Theme="theme",e.Locale="lng",e.UserId="userId",e.TenantId="tenantId",e.RingId="ringId",e.SubEntityId="subEntityId",e.IsBrowser="isBrowser"}(a||(a={}));const c="gallatin",s="dev"===c,u="test"===c,d="int"===c,l="883b26f1-d679-4e22-bea8-1f035facad46",p="0554b121-1b89-4819-ad00-9cd3b25a6726",f="00000000-0000-0000-0000-000000000000",h="9a40f5a4d1754c7db42aef1d8bed8003-ba2a02df-1fa3-4c6e-8b5a-dcd64f03f256-7677",m="07c95ii7",g="https://addressbook-gal-poc.dg-app.com/883b26f1-d679-4e22-bea8-1f035facad46",v="https://habbeservice.chinacloudsites.cn",b=new URLSearchParams(window.location.search),S=(null===(o=null=={}?void 0:{}.teams)||void 0===o?void 0:o.context)||{},k=null!==(r=s&&b.get("teams.idToken"))&&void 0!==r?r:null===(i=null=={}?void 0:{}.teams)||void 0===i?void 0:i.idToken,A=s&&b.has(a.IsBrowser)},"9hZ6":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var o,r,i,a,c,s,u=n("H8PI");function d(e,t,n){const o=Object(u.e)(e,t);return n?`${o}?${new URLSearchParams(n).toString()}`:o}!function(e){e.HomePage="/homePage",e.DepartmentTeam="/departmentTeam",e.SearchResults="/searchResults"}(o||(o={})),function(e){e.DemoCard="DemoCard"}(r||(r={})),function(e){e.Occurrence="Occurrence",e.Report="Report"}(i||(i={})),function(e){e.SuccessStoryModal="SuccessStoryModal",e.TemplateStoreModal="TemplateStoreModal",e.TemplatePreviewModal="TemplatePreviewModal"}(a||(a={})),function(e){e.Received="Received",e.Submitted="Submitted",e.Request="Request"}(c||(c={})),function(e){e.Write="Write",e.View="View",e.List="List"}(s||(s={}))},HVbO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return g}));var o=n("fOXQ"),r=n("yftM"),i=n("0acT"),a=n("d5gM"),c=n("Gsa1"),s=n.n(c),u=n("snMe"),d=n("8MrD"),l=n("xZ10"),p=n("pIRP"),f=n("5ssl");const h=d.m?"dev":"en-US";function m(e){const t=l.a.find((t=>t.toLowerCase()===e));if(t)return t;const n=l.a.filter((t=>t.toLowerCase().startsWith(`${e}-`)));return 1===(null==n?void 0:n.length)?n[0]:f[e]}d.m&&l.a.unshift("dev"),a.a.use(u.e).use(s()(((e,t,o)=>{d.p||n("8/2k")(`./${e}/${t}.json`).then((e=>{o(null,e)})).catch((e=>{o(e,null)}))}))).init({debug:d.m,ns:"strings",lng:d.l.get(d.h.Locale)||localStorage.getItem("i18nextLng")||h,interpolation:{escapeValue:!1},supportedLngs:l.a,fallbackLng:function(e){if(!e)return[h];const t=[],n=e.toLowerCase().split("-");for(;n.length;){const e=m(n.join("-"));if(e){t.push(e);break}n.pop()}return!d.m&&t.length||t.push(h),t},load:"currentOnly"},(()=>{})),a.a.on("languageChanged",(e=>{document.documentElement.setAttribute("lang",e),document.documentElement.setAttribute("dir",a.a.dir())})),a.a.on("initialized",(()=>{Object(i.j)().then((()=>{p.f.markScenario(p.c.AppBoot,p.e.TeamsInitializationSuccess,r.g.Success)}))}));var g=a.a},TJux:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("SGJe");const r=Object(o.c)()},TktC:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n("0acT"),n("VTGp");var o=n("2spY");Object(o.a)({isOpen:!1}),Object(o.a)({isOpen:!1}),Object(o.a)({isOpen:!1}),Object(o.a)({isOpen:!1}),Object(o.a)({isOpen:!1});const r=e=>{if(!e)return"";const t=e["x-msedge-ref"]||e["x-ms-ref"];return null!=t?t:""};var i;function a(e,t,n){return!function(e,t){return Boolean(e||t)}(t,n)&&(!e||(e.includes("preview")||e.includes("newchat")))}!function(e){e.CreateSelfOwnedReportDefinitionInput="CreateSelfOwnedReportDefinitionInput",e.SubmitReportInputOfUpdatesRuntime="SubmitReportInputOfUpdatesRuntime",e.SubmitOOBEReportInputOfUpdatesRuntime="SubmitOOBEReportInputOfUpdatesRuntime"}(i||(i={}))},TzxL:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("0acT"),r=n("ERkP"),i=n.n(r),a=n("8MrD"),c=n("pIRP"),s=n("+INc"),u=n("Tr4L"),d=n("HVbO"),l=n("YCKj");const p=({children:e})=>{const{t:t}=Object(u.a)(void 0,{useSuspense:!1});return i.a.createElement(s.c,{title:t(d.a.errorTitle,{defaultValue:""}),message:`Session Id: ${null===c.f||void 0===c.f?void 0:c.f.sessionId}`,height:"100vh",actionText:t(d.a.errorAction,{defaultValue:"Refresh"}),onAction:()=>c.f.flushLogs((()=>{const e=window.location;e.pathname.includes("/taskModule")||(e.hash=""),Object(l.c)(),e.reload()})),role:"alert"},e)};class f extends i.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){const n=`App failed to boot: ${e.message}, stack:${e.stack}, componentStack: ${t.componentStack}`;c.f.logTraceError(c.a.AppBoot,n),c.f.markScenario(c.c.AppBoot,c.e.AppBootFailedWithErrorBoundary),c.f.failScenario(c.c.AppBoot),this.setState((n=>Object.assign(Object.assign({},n),{error:e,errorInfo:t}))),a.m||Object(o.i)({reason:o.d.FailedReason.Other,message:c.f.sessionId})}render(){var e,t;return this.state.hasError?i.a.createElement(p,null,this.state.error&&i.a.createElement("div",{role:"log"},i.a.createElement("details",null,i.a.createElement("summary",null,"Call Stack (",this.state.error.message,")"),i.a.createElement("pre",null,null===(e=this.state.error)||void 0===e?void 0:e.stack)),i.a.createElement("hr",null),i.a.createElement("details",{open:!0},i.a.createElement("summary",null,"Component Stack"),i.a.createElement("pre",null,null===(t=this.state.errorInfo)||void 0===t?void 0:t.componentStack)))):this.props.children}}},VTGp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var o=n("2spY");const r=Object(o.a)(!1),i=Object(o.a)([]);Object(o.a)(!1)},ajHv:function(e,t,n){"use strict";var o=n("8MrD");window.CSPSettings={nonce:o.g},window.FabricConfig={mergeStyles:{cspSettings:{nonce:o.g}}}},dERd:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return p}));var o=n("Y918"),r=n("ogYq"),i=n("Y8RE"),a=n("fPKC");function c(){Object(o.c)(),Object(i.a)(),Object(r.I)({icons:{[a.a]:o.b.Calendar}})}const s="#13a10e",u="#d13438",d="#eaa300",l="#707070",p={Available:{name:o.a.PresenceAvailable,color:s},AvailableIdle:{name:o.a.PresenceAvailable,color:s},Away:{name:o.a.PresenceAway,color:d},BeRightBack:{name:o.a.PresenceAway,color:d},Busy:{name:o.a.PresenceBusy,color:u},BusyIdle:{name:o.a.PresenceBusy,color:u},Offline:{name:o.a.PresenceOffline,color:l},PresenceUnknown:{name:o.a.PresenceUnknown,color:l}}},fPKC:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"c",(function(){return h}));var o=n("8MrD");Math.round(9900);const r="AppLogo",i="x-ms-client-request-id",a="x-ms-tenant-id",c="mise-correlation-id",s="/web/desktop.html",u="/web/mobile.html",d="gcch"===o.f?"https://graph.microsoft.us":"dod"===o.f?"https://dod-graph.microsoft.us":"gallatin"===o.f?"https://microsoftgraph.chinacloudapi.cn":"https://graph.microsoft.com",l="tempauth",p="gcch"===o.f?/sharepoint\.us/:"dod"===o.f?/sharepoint-mil\.us/:"gallatin"===o.f?/sharepoint\.cn/:/sharepoint(-df)?\.com/,f=30,h="gcch"===o.f?"https://config.ecs.gov.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0":"dod"===o.f?"https://config.ecs.dod.teams.microsoft.us/config/v1/MicrosoftTeamsApps/1.0.0.0":"gallatin"===o.f?"https://mooncake.config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0":"https://config.teams.microsoft.com/config/v1/MicrosoftTeamsApps/1.0.0.0";"gcch"===o.f||"dod"===o.f||o.f},"k/S9":function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n("jTXW"),r=n("Qt34"),i=n("fPKC"),a=n("kUcb"),c=n("FMwJ"),s=n("1hmm"),u=n("pIRP");const d=new o.a;const l=new o.b,p=[{regex:/\/photo(s\/.*)?\/\$value$/,status:[404]}];function f(e,t){return"GET"===e.method&&(!t||t.ok||p.some((({regex:n,status:o})=>n.test(e.url)&&o.includes(t.status))))}const h="client-request-id";const m=(e,t)=>{const n=null==t?void 0:t.headers.get("retry-after"),o=n?parseInt(n,10):NaN;return 1e3*(isFinite(o)?o:Math.pow(2,e))};function g(e){var t;return{start:performance.now(),url:e.url,method:e.method,clientRequestId:null!==(t=e.headers.get(h))&&void 0!==t?t:""}}function v(e,t){var n;const o={latency:performance.now()-t.start,apiName:S(t.url,k),url:S(t.url,A),requestMethod:t.method,clientRequestId:t.clientRequestId,responseCode:e.status,responseText:e.statusText,correlationId:null!==(n=e.headers.get("request-id"))&&void 0!==n?n:""};u.f.logHttp(o)}function b(e,t){e instanceof Error&&u.f.logTraceError(u.a.NetworkError,`NetworkError ${S(t.url,A)} ${e.message}`)}function S(e,t={}){const n=new URL(e);if(t.user&&(n.pathname=n.pathname.replace(/(?<=users\/)\S+?(?=\/|$)/g,"[user]")),t.group&&(n.pathname=n.pathname.replace(/(?<=groups\/)\S+?(?=\/|$)/g,"[group]")),t.photo&&(n.pathname=n.pathname.replace(/(?<=photos\/)\S+?(?=\/|$)/g,"[photo]")),t.drive&&(n.pathname=n.pathname.replace(/(?<=drives\/)\S+?(?=\/|$)/g,"[drive]")),t.item&&(n.pathname=n.pathname.replace(/(?<=items\/)\S+?(?=:|\/|$)/g,"[item]")),t.itemPath&&(n.pathname=n.pathname.replace(/(?<=(items\/\S+|root):)\S+?(?=:)/g,"[item-path]")),t.share&&(n.pathname=n.pathname.replace(/(?<=shares\/)\S+?(?=\/|$)/g,"[share]")),t.thumbnail&&(n.pathname=n.pathname.replace(/(?<=thumbnails\/)\S+?(?=\/|$)/g,"[thumbnail]")),t.sharepoint){const e=n.hostname.match(i.j);e&&(n.hostname=e[0],n.pathname="",n.search="")}return t.token&&n.searchParams.has(i.k)&&n.searchParams.set(i.k,"<token>"),n.toString()}const k={user:!0,group:!0,photo:!0,drive:!0,item:!0,itemPath:!0,share:!0,thumbnail:!0,sharepoint:!0},A={itemPath:!0,token:!0};var I=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};const P=new r.a({baseUrl:i.d,interceptors:[Object(o.k)({pool:d}),Object(o.g)({cache:l,test:f}),Object(o.l)({backoff:m}),Object(o.m)(),Object(o.j)(),R(),Object(o.h)({[h]:s.e}),Object(o.i)({logRequest:g,logResponse:v,logError:b})]});function R(){return Object(o.f)((e=>I(this,void 0,void 0,(function*(){return e.url.startsWith(i.d)?Object(c.a)(a.ResourceType.Graph,i.d):""}))))}},kiQV:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},pIRP:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c}));var o,r,i,a,c,s=n("yftM"),u=n("8MrD");!function(e){e.AppBoot="AppBoot",e.PeopleCard="PeopleCard"}(o||(o={})),function(e){e.OpenPeopleCard="OpenPeopleCard"}(r||(r={})),function(e){e.HomePage="HomePage",e.SearchResult="SearchResult"}(i||(i={})),function(e){e.AppBootStarted="AppBootStarted",e.AppExit="AppExit",e.AppBootHostContextInitialized="AppBootHostContextInitialized",e.AppBootLoggerInitialized="AppBootLoggerInitialized",e.AppBootSuccess="AppBootSuccess",e.AppBootFailedWithError="AppBootFailedWithError",e.AppBootFailedWithErrorBoundary="AppBootFailedWithErrorBoundary",e.AppBootDispatchDeepLink="AppBootDispatchDeepLink",e.FileBrowserNavigationEndedNotification="FileBrowserNavigationEndedNotification",e.FileBrowserNavigationStartedNotification="FileBrowserNavigationStartedNotification",e.FileBrowserPageLoadedNotification="FileBrowserPageLoadedNotification",e.SharePointPickerPickLocalFiles="SharePointPickerPickLocalFiles",e.SharePointPickerAuthenticate="SharePointPickerAuthenticate",e.SharePointPickerClose="SharePointPickerClose",e.SharePointPickerPick="SharePointPickerPick",e.TeamsInitializationSuccess="TeamsInitializationSuccess",e.AppBootReactRendered="AppBootReactRendered"}(a||(a={})),function(e){e.PersonalApp="PersonalApp",e.AppBoot="AppBoot",e.AuthHelper="AuthHelper",e.FileUpload="FileUpload",e.FileUploadAuth="FileUploadAuth",e.APIRequest="APIRequest",e.RetryOnNotProvisioned="RetryOnNotProvisioned",e.CheckUserRole="CheckUserRole",e.FormDesign="FormDesign",e.DeepLink="DeepLink",e.Navigate="Navigate",e.ShareLink="ShareLink",e.SharePointPicker="SharePointPicker",e.LoadingTimeout="LoadingTimeout",e.ECSRequest="ECSRequest",e.ErrorStatus="ErrorStatus",e.DuplicateFormQuestion="DuplicateFormQuestion",e.NetworkError="NetworkError",e.TimeoutExceeded="TimeoutExceeded",e.RequestAborted="RequestAborted",e.TeamsSDKError="TeamsSDKError",e.RuntimeError="RuntimeError",e.UnknownRequestError="UnknownRequestError",e.FeedbackSDKError="FeedbackSDKError",e.ReportResponse="ReportResponse",e.ReactQuery="ReactQuery",e.ResizeTaskModule="ResizeTaskModule",e.ReportDraft="ReportDraft",e.OCPSRequest="OCPSRequest"}(c||(c={}));const d=new s.c({ariaToken:u.c,isDevelopment:u.m||u.o,delay:1e4,logTraceTypes:u.m||u.o?["Debug","Info","Warning","Error","Exception","HTTPException"]:["Warning","Error","Exception","HTTPException"]})},rMck:function(e,t,n){}}]);