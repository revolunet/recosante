"use strict";(self.webpackChunkrecosante_site=self.webpackChunkrecosante_site||[]).push([[488],{3637:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(7294),a=n(9),o=n(5444),i=n(6725),l=n(9157),u=n(4563),c=n(28),s=n(5279),m=a.default.div.withConfig({displayName:"TextInputWithLabel__Wrapper",componentId:"sc-1x4igqa-0"})(["margin-bottom:1rem;"]),p=a.default.label.withConfig({displayName:"TextInputWithLabel__Label",componentId:"sc-1x4igqa-1"})(["display:block;margin-bottom:0.5rem;color:",";"],(function(e){return e.theme.colors[e.error?"error":"text"]}));function d(e){return r.createElement(m,{className:e.className},e.label&&r.createElement(p,{htmlFor:e.name,error:e.error},e.label),r.createElement(s.Z,{type:e.type,name:e.name,value:e.value,error:e.error,onChange:e.onChange}))}var f=a.default.div.withConfig({displayName:"TextArea__Wrapper",componentId:"sc-4jcdm7-0"})(["margin-bottom:1.5rem;"]),h=a.default.label.withConfig({displayName:"TextArea__Label",componentId:"sc-4jcdm7-1"})(["display:block;margin-bottom:0.5rem;color:",";"],(function(e){return e.theme.colors[e.error?"error":"text"]})),b=a.default.p.withConfig({displayName:"TextArea__Subtitle",componentId:"sc-4jcdm7-2"})(["margin-bottom:1rem;font-size:0.875rem;opacity:0.7;"]),v=a.default.textarea.withConfig({displayName:"TextArea__Input",componentId:"sc-4jcdm7-3"})(["width:100%;padding:0.5em 0.75em;background-color:",";box-shadow:inset 0 -2px 0 0 ",";border:none;resize:vertical;border-radius:0.25rem 0.25rem 0 0;"],(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors[e.error?"error":"main"]}));function g(e){return r.createElement(f,null,e.label&&r.createElement(h,{htmlFor:e.name,error:e.error},e.label),e.subtitle&&r.createElement(b,null,e.subtitle),r.createElement(v,{rows:"3",id:e.name,name:e.name,value:e.value,error:e.error,onChange:function(t){e.onChange({value:t.currentTarget.value,name:e.name})}}))}var _=n(8309),y=n(4185),E=a.default.form.withConfig({displayName:"Referral__Wrapper",componentId:"sc-1caixt9-0"})(["display:flex;flex-direction:column;"]),w=(0,a.default)(_.Z).withConfig({displayName:"Referral__Submit",componentId:"sc-1caixt9-1"})(["align-self:flex-end;"]);function x(){var e=(0,r.useState)(""),t=e[0],n=e[1],a=(0,r.useState)(""),o=a[0],i=a[1],l=(0,c.bt)(),u=(0,r.useState)(!1),s=u[0],m=u[1];return r.createElement(E,{onSubmit:function(e){e.preventDefault(),t&&o?(m(!1),l.mutate(t,o.replaceAll(", ",",").split(",")),window._paq&&window._paq.push(["trackEvent","Doctors","Mail",t])):m(!0)}},r.createElement(d,{label:"Votre nom et fonction",name:"name",value:t.name,error:s&&!t.name,onChange:function(e){var t=e.value;return n(t)}}),r.createElement(g,{label:"Les emails des patient·e·s que vous souhaitez inscrire",subtitle:"Entrez un ou plusieurs email(s) séparés par des virgules (,).",name:"patients",value:t.patients,error:s&&!t.patients,onChange:function(e){var t=e.value;return i(t)}}),r.createElement(w,null,"Envoyer"),s&&r.createElement(y.Z,{error:!0},"Merci de remplir tous les champs"),l.isError&&r.createElement(y.Z,{error:!0},"Une erreur est survenue. Une ou plusieurs invitations n'ont pas pu être envoyé."),l.isSuccess&&r.createElement(y.Z,null,"Les invitations ont été envoyées"))}var C=(0,a.default)(u.Z).withConfig({displayName:"inscription-patients__StyledSection",componentId:"sc-1wdgti1-0"})(["font-size:1.125rem;"]);function I(){var e=(0,o.useStaticQuery)("1727417032");return r.createElement(l.Z,{title:"Recommander Recosanté"},r.createElement(C,{small:!0,first:!0},r.createElement(i.MDXRenderer,null,e.mdx.body),r.createElement(x,null)))}},28:function(e,t,n){n.d(t,{Bq:function(){return u},bt:function(){return c}});var r=n(686),a=n(6633),o=n.n(a),i=n(9339),l=n(7711);function u(e){var t=(0,i.Wd)("short_id")[0],n=(0,i.Wd)("avis")[0];return(0,r.useQuery)(["profile",t,n],(function(){return o().post(l.Z+"/newsletter/"+t+"/avis?appliquee="+n,null,{headers:{Accept:" application/json"}}).then((function(e){return e.data}))}),{enabled:!(!t||!n),refetchOnWindowFocus:!1})}function c(){return(0,r.useMutation)((function(e,t){return o().post(l.Z+"/inscription-patients",{nom_medecin:e,mails:t},{headers:{Accept:" application/json","Content-Type":"application/json"}})}))}}}]);
//# sourceMappingURL=component---src-pages-inscription-patients-js-e15bc56ee1228d4b1fce.js.map