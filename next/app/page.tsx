import Text from "@/components/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full p-7">
        <Text as="h1">Lorem Ipsum is simply dummy text </Text>
        <Text as="h2">Lorem Ipsum is simply dummy text </Text>
        <Text as="p">Lorem Ipsum is simply dummy text </Text>
        ------------------------------------------------------------------
        <Text bold>Lorem Ipsum is simply dummy text </Text>
        <Text>Lorem Ipsum is simply dummy text </Text>
        ------------------------------------------------------------------
        <Text oblique>Lorem Ipsum is simply dummy text (oblique) </Text>
        <Text oblique={false}>
          Lorem Ipsum is simply dummy text (not oblique)
        </Text>
        ------------------------------------------------------------------
        <Text as="h1" fontFamily="everett">
          Lorem Ipsum is simply dummy text
        </Text>
        <Text as="h2" fontFamily="everett">
          Lorem Ipsum is simply dummy text
        </Text>
        <Text as="p" fontFamily="everett">
          Lorem Ipsum is simply dummy text
        </Text>
        ------------------------------------------------------------------
        <Text as="h1" bold>
          Lorem Ipsum is simply dummy text
        </Text>
        <Text as="h2" bold>
          Lorem Ipsum is simply dummy text
        </Text>
        <Text as="p" bold>
          Lorem Ipsum is simply dummy text
        </Text>
      </div>
    </main>
  );
}
