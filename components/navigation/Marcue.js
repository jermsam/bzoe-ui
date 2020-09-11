import React from "react";
import { Anchor, Image, Box, Text } from "grommet";

export const CMarqueCard = ({ text, link, alt, src, srcSet }) => {
  return (
    <Anchor
      href={link}
      className="c-marquee__item"
      data-clog-click=""
      data-clog-ui-element="link_customer_story"
      data-clog-params="trigger=zipcar"
      style={{
        textDecoration: "none"
      }}
      color="grey"
      pad="medium"
    >
      <Box gap="medium" align="center">
        <Text textAlign="center" size="small">
          {text}
        </Text>
        <Image
          src={src}
          srcSet={srcSet}
          fit="cover"
          alt={alt}
          className="c-marquee__attribution"
        />
      </Box>
    </Anchor>
  );
};

export const CMarqueClone = () => {
  return (
    <Box width="flex" className="c-marquee is-animated">
      <div className="c-marquee__container">
        <CMarqueCard
          text=" Revving up marketing campaigns and giving back."
          link="https://slackhq.com/revving-up-marketing-campaigns-at-zipcar"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
          alt="Zipcar"
        />

        <CMarqueCard
          text="Slack is the way we get business done."
          link="https://slack.com/customer-stories/zapier"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier@2x.png 2x"
          alt="Zapier"
        />

        <CMarqueCard
          text="We work across two floors so we have a physical gap—but we use Slack as a bridge to keep everyone in the loop."
          link="https://slack.com/customer-stories/thetimes"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk@2x.png 2x"
          alt="The Times and Sunday Times, UK"
        />

        <CMarqueCard
          text="Mission-critical sales work at Lyft Business"
          link="https://slack.com/customer-stories/lyft"
          src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
          alt="Lyft"
        />

        <CMarqueCard
          text="With e-commerce, the store is never closed. Slack helps us get together quickly when there are issues."
          link="https://slack.com/customer-stories/jet"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet@2x.png 2x"
          alt="Jet"
        />
        {/** */}
        <CMarqueCard
          text=" Revving up marketing campaigns and giving back."
          link="https://slackhq.com/revving-up-marketing-campaigns-at-zipcar"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
          alt="Zipcar"
        />

        <CMarqueCard
          text="Slack is the way we get business done."
          link="https://slack.com/customer-stories/zapier"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier@2x.png 2x"
          alt="Zapier"
        />

        <CMarqueCard
          text="We work across two floors so we have a physical gap—but we use Slack as a bridge to keep everyone in the loop."
          link="https://slack.com/customer-stories/thetimes"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk@2x.png 2x"
          alt="The Times and Sunday Times, UK"
        />

        <CMarqueCard
          text="Mission-critical sales work at Lyft Business"
          link="https://slack.com/customer-stories/lyft"
          src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
          alt="Lyft"
        />

        <CMarqueCard
          text="With e-commerce, the store is never closed. Slack helps us get together quickly when there are issues."
          link="https://slack.com/customer-stories/jet"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet@2x.png 2x"
          alt="Jet"
        />
        {/** */}
        <CMarqueCard
          text=" Revving up marketing campaigns and giving back."
          link="https://slackhq.com/revving-up-marketing-campaigns-at-zipcar"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
          alt="Zipcar"
        />

        <CMarqueCard
          text="Slack is the way we get business done."
          link="https://slack.com/customer-stories/zapier"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier@2x.png 2x"
          alt="Zapier"
        />

        <CMarqueCard
          text="We work across two floors so we have a physical gap—but we use Slack as a bridge to keep everyone in the loop."
          link="https://slack.com/customer-stories/thetimes"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk@2x.png 2x"
          alt="The Times and Sunday Times, UK"
        />

        <CMarqueCard
          text="Mission-critical sales work at Lyft Business"
          link="https://slack.com/customer-stories/lyft"
          src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
          alt="Lyft"
        />

        <CMarqueCard
          text="With e-commerce, the store is never closed. Slack helps us get together quickly when there are issues."
          link="https://slack.com/customer-stories/jet"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet@2x.png 2x"
          alt="Jet"
        />
        {/** */}
        <CMarqueCard
          text=" Revving up marketing campaigns and giving back."
          link="https://slackhq.com/revving-up-marketing-campaigns-at-zipcar"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
          alt="Zipcar"
        />

        <CMarqueCard
          text="Slack is the way we get business done."
          link="https://slack.com/customer-stories/zapier"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier@2x.png 2x"
          alt="Zapier"
        />

        <CMarqueCard
          text="We work across two floors so we have a physical gap—but we use Slack as a bridge to keep everyone in the loop."
          link="https://slack.com/customer-stories/thetimes"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk@2x.png 2x"
          alt="The Times and Sunday Times, UK"
        />

        <CMarqueCard
          text="Mission-critical sales work at Lyft Business"
          link="https://slack.com/customer-stories/lyft"
          src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
          alt="Lyft"
        />

        <CMarqueCard
          text="With e-commerce, the store is never closed. Slack helps us get together quickly when there are issues."
          link="https://slack.com/customer-stories/jet"
          src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png"
          srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_jet@2x.png 2x"
          alt="Jet"
        />
      </div>
    </Box>
  );
};