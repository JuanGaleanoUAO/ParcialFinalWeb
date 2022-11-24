<template>
  <v-row class="mt-10 mb-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(client, i) in clients"
      :key="i"
    >
      <v-card class="elevation-16 mx-auto" width="300">
        <v-list subheader two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="client.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ client.title }}</v-list-item-title>

              <v-list-item-subtitle>{{ client.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-text>
          <div class="mt-n7">
            <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              small
            ></v-rating>
          </div>
          {{ client.bio }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rating: 4.5,

    clients: [
      {
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYZFhgaHBkYGRgcGhgaGBgYGBoZGRoaGBgcIS4lHB4rIRkZJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQsJCs2NDQ0MTQ0NDU0NDQ0NDc0NDQ0NDQ/NjE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABBEAACAQIDBQUFBQYFBAMAAAABAgADEQQSIQUxQVFhBiJxgZETMqGxwQdSctHwI0JigpLhMzRzsvEUJMLSFUSi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAQEAAgICAgAGAwEAAAAAAAABAhEhMQMyEkEEIjNRYYEFcZEj/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERA8iJptr9osPhwc7gt9xdW87bvOEybbmJzXaH2lndSpAdWYH4Ca0faJir6hQOYW4+cr8on411yJzHA/aHVBu6q6H7oykTd4P7RcI5yvmpm28gsL8u7EylLjYmcSEv9olC5C03YcDcC/W03mx+0tDEaI2VvunQ+R3GTuI1W7iIkoIiICIiAiIgIiICIiAiIgIiICIiAiIgeSipUCgkkADUk6ACVzk32idrWZjh6J7gJDHg7Dff+AfEyLdJk2u9sPtBNzSw5IG4vxbnbpOd18YWa7uxPJdfWHw+mZ2IHE/vv4chL9DAkjuIwHMWv5mxmVu+20x/ZZpVgNynxMzUr33g/rxhdl1eR8xLi7PqKNQPjI4W1WNXbXu63/WoltFF5nUcG+vdA8b/AAM12NUht9iOUsqylXgDry/KV0a7oQ6k6HUcR4TGwla5ytoeBmayEd63Rh0kDq/YntKMQgRjdwO6TvYDffqJLpwTY+KbD1gynS4Yfrkd07hs3GLWpq44jUcjxEvjds88dcsyIiXUIiICIiAiIgIiICIiAiIgIiICIiBHO2m1vYYdgps7gqvQEd5vITi4ph2Lk6b/AOUbgT8TJj9oWPNSuyA91LUx4nVz9PKars5sv2z2b3FsT1vuHyMwzyb+PFRsHs81citVFk/cTiRzPISb08CqiwUAcrTOp4cAWA0lzJMruumajXjCLyEofZqHhNmElQWRpO0WxeybXsPSRDa2BN906rUoAiRvbOzb6gSccrFcsZXOUoZhyI3flNnhjmHJhofpKcfhSjXHj49JRha3eB56H6TXe4x1qsk0SyHmht5HUfGdC+zvaJZTTPEZv5ho0hFrNfgwII6za9lcV7LEKSdC2vnofzjHLkyx3HXYngns3cxERAREQEREBERAREQEREBERA8lrEVQqM53KC3oLy7ND21xfs8HVYGxIyj+bSRbqJk3dOSY/Elyaja+0L1D0zGw+THzk07IYXJQVjvfv+TbvhaQJhmyID7xRB5gf+86lhMiKEBHdAFr7gBac2Trw6Z6iCIp2IvKzLaTtbIgCekiU+1Ub2A85XSdq7TGxFEEWMuNikGmdfWVK6sLggjpFiIg3aLZuXvCQzEdx7cDunVtt4bMh4zk229CVOhB7p68pOJm39Js6K1rEgN5jQ/KZQXK/owPRv0Zp+zeKz0rHerWP82/85usSp7jDkUP4l3ReKiXcdc2dVz0kbfdVv421mXNN2UqZsOvQkTczoxu45Mpq17ERJQREQEREBERAREQEREBERA8kK+1Kvlwlubr8DJrOf8A2tt+wpDnUH0lculsO0Dw1FnxFNE95RmB/iubH0tJY+xDbvVbNI72eNsU7fdW3oov8ZkUnrVvbVEKg081la5drcFXeBMJu3UdnGM3W5w2AqJ7tQnzMk2EqEqLm54zmOz9sVfaEWBFzZtRdQL3IPprOgbLxGYAyt3F5qzhmYsMVIBsZH6mziSczCSLEVNJHsVXzOEBW+/vmyDqfvHpIm7eCdcqaOy0vrV15aTPp7PqU9aTlhxU21kN26K1OuEFTOupJyjLawK5QN4OvpNnsPaNVKio1rEAnKSVF/kekvZZ2rLL0mGGr51sy5WGhU/TpIJ272B3WqINP3h9ROh09dZhbboZqTjoZWXV2izc0452Mq/tmQ/vL8RJpVpd02P749Tp+UgWB/Y45eAJIt8fpOg1TbOOQuPEaj5TTPtlj0m3Ymtemy9Qw6ZpKJDOwT61B+tCfzEmc0w6YZ9vYiJdUiIgIiICIiAiIgIiICIiB5IH9qyXoUv9QfGTyRD7SaV8MrfddTK5dVbD2iDdjKOepWfkxX11kjr7GpsblBfmND6zF7CYbLQZ+NSpUPkpyj5GSY0+M5dcu+dI2uxEBvlB8dfnNzgqIUWEqzrfKNTMlKcd1N4i3XS819TBAm9rza1F5b5j+3AYK2l90fZP4ar/AOGpk3yemgmxwmARPdQL4C02AQSsLJ0i1aU2ljGuCpHSX3mFidxlamRxntDTyYgMODA/EXk6VrlD95E+K2+chXaod821IJv0El2Ca6UTzRfhNbemGtbSTsZWtiWXdfh4pm/8Z0Kcu7OvlxyDnl/2sv1nUZr4+mHk7exES7MiIgIiICIiAiIgIiICIiB5Iz2/F8Iw/iWSaRztx/liObASuXVWw9ojHY6sDhrfcd1Pmxb/AMptcdi8q/SRTshiMr1qR42cegDTdY9GBDbwOE5crrh6OGrGVhaRAuT3jvtwvwmSuZV33txO+aPC7fDsUSk7MN4IC2sbb7zYptFrHPQqC3FbN66yZjVrjavMjub3ZfOVvhc1idSOMxhtF964eoQeJyr8zL//AF7gXNB99t6HXl70fH90WWL1GsR3W/5mWtWRrHbYVXVCjhmvYZRpYga2JtNxQvYEyLbialm2Wz3mLjR3SekvoJh7crBKbHp85XtXenMe1tLKgckak6cdb7/SbzZ5HsKB8pzrb+OepWZWYlVawHAaSfbMf/taJ5WPwE2yx1I58ct2thga+TaFM8Dk/wB4/OdgnFXe2Mot0U+hB+k7VNPH0x8nb2IiaMyIiAiIgIiICIiAiIgIiIHki3bxv2SDmw+YkpkI+0Otb2Sjqx8iv95TP1q/jn5o51hsd7HF03PulhTboH0v62nSaqBktOS9pFvnG6x+Rk77CbbGIw6hj30sjjiSosG8xOezc27MctXSrEo+Gr+2QDK9g4tfcRcDkSOM3uG7SYcg71uNbj8pXWpBgVIuOUwhspOFwP1zl8cp9tbMM5+be/4ZFftNQAUKrMQQbAbrDrpMHE7UrVe7STICwbNoWFjfdul6nsdAbm7HqZs6dIAWAAi5T6TZ4sfWb/21lDZdizuc7tvY8OgHCbMU7KBK1WeVXmeV2p8rXii0jPanE3XKNw1M3uIrWGm+Rvb6WpOx5GRO0VxusL1Hb8R9bzouDOXCUh4X/pnPVbM+bn/cSeI3/bIOWW/pYzbP6c3j+1/GvavRbmPoZ3Gk1wDzAM4NjGuKLch8p3PZr5qSNzVflLeNXysqIiasSIiAiIgIiICIiAiIgIiIHk559oTn2yfgsPM6zoc579odvaIeIUD1YzPy+rTxezm3aAXFQ+fykf7M7bbCYjOuqk5XX7y34dRvkq2tTujnmPoJBXp2e/W3p+hKePmWNfJxlLH0RgMWlVFdGDKwuCJmIk412R7SPhbhrtSOrLxX+JOvOdVwW1kdA6NdWFweYlLNVrjluNiVlVphPtBecxKm0eUrbF/ja2VesBMJ8RMIOzG5mVRpylu0yaVpTvqZqO1CfsH/AAmSJKek1W3aOamw6GT0rbtwXCnf0P1k4St+wXy+chtajkqOvJrHwOv1kkw1TNRA5a/H+838n1XPh9xm4ur+zp/zg/r0nbuy9TNhaR/h+U4VjdaS9C3oRO19h2vg6XQEfGT41fJ0kMRE2YkREBERAREQEREBERAREQPJzLty+bFFTuVV+RM6bOadr1DYpudreiL+cy8vq28Psie0FvSb8J+U5+/vDzM6DizYVQeCgf8A5EgNFcxbpp6ynj4xX8nsyVFkY9AJ0nsI+bC0weVpznECyEdDJ19nVS+HUciw9DGfrtbx+2kxbAAypMCBwmbSOkugTPTb5ViphwJfSnLwWVhImKLkoyzX7UYKjE7gCTNqVkM7XbQDfsV14v0HAecn47ulPlJNufVsBnDsRq7FvAbh8BMLA1ilkY66jyO4/ASUgjx/KYmO2UtTUCxvcHjOi47mnLMudrTd5CvNSR/ST9J177Oal8Io5H5gTkuDQo6hxxIvwIa4+s6b9mFe9F04ow+VvpKY8XS+fOO05iImzEiIgIiICIiAiIgIiICImJjNoUqQvUqIn4mA9BAyjOV7WxftMQ7fxWFvT5ASR7R7c0O8lEl2yk5rEKOHHUyDU6mqcSW18S1voZh5bvhv4Zrlrdsvl9sebqPkJFMBQ0PVyP6ZIu0b3RyN7VdP67fSYOHpBT0F/XeZE4xXvOTCxtO6eG+TH7PUtQvzdiPAmRXGUyAAwsLBrEG7FjpYcR1nQuyuCKUUU77XMjK/l0thPzbSehMgSzSWX7SkaXtWsrEpQSxjMSqKWY2ABJ8pZSsPb+1RRQkasdFHWc6esSSTqxNyfGZO2tpGq5bhuUchz8Zg0xbUzfHHXNcueW7qdLota+4mY+JxTE+zQ2P77fcXx+9LeKxOXRRd20UfNj0EUqeRMoNyTqeJJ3ky6jPRFCBd4sN/zvzks7AVAmIZc2lQGwNhqBfz8pEaYmbTe1jfKRqN4t4Stx3ytLZNO3RINsHteRZK+o3B+P8AMOPjJjh8WlQXRlb8JBtLKsiIiAiIgIiICIiAlDMACToBqZXIR9pG2zSpCihs1T3jxC3FgPE/AQNX2j7cOzFMMcqC4L8W6rfcJBsbi3Y3Zi7sbC5JJJ6mL2AHSebMphmao/ug5EHPnbqd3lIt1FpNsvCUCiXOpY6nibfThL+HYZ1AN9b/ANI/O8pxFe5BO4aW8OEw9nYjM7sNAFew6AWnNb8t104z4yRZxy50T8WY+ZYwmHYo2RcxsWIuBpfrPao0Veo+AAP1mz2bhTb2lRLUswUPYlgNb5V4+FtYtFGA2IzlFcE5QrZ73B1OnX5SeYLD2A0lnZWGQAlLlCboTvIO8+E2wSwle2k1I9USrNLRJnqiNml4vaQPtRtrO3s0vkUnMfvMPpNp2j2sFAVc2/UjTvDULfhvvIXvJm3jx3y5/Ln9RSnMymvXUAudw+MuNymvYh3t+4h1tud/7TdhF7BUib1H0duH3V4KJeXU+GgMMTu3S9Tp28ZC0Vp4z2riAgu5sN27U+AGplGIrhFzG54ADeSeAjBYc3zubv6hByX84SqpvVcaWpDqMzkeG5ZmYVXVgy1agN94bL8uE8Yz1Tb/AJkoTzs32icsKdYhgdFqaAjo4435jzkznF6FYqd+6SrYXatlIWrcruvvKyEaT+JZw+IV1DIQwPES9CCIiAiIgJwvtbtE18U53jMQOipoPjOxbd2gtCg9RuAsBzJ0AE4SxvUJ6fMwLqJffu5/QdYpHIoJFtCEUeNy0uu4ABO7gOcwsLVLu1RvdW/hpuA6TPO8NsJyu7UrZUC7i2hPLi30Eo2J7juRvFvC7aD0Ew8SS7C+61/WbGiVSkyDhlv46m3lMbxGs5yXsDhnr1slMqHVb3b3RbUk+okzxVCouZ2dqbBFLPlGVmFh3ByJv1taRLsPtFkxFVQAVZTmNhcWOmpBsNZNNoYWmqEvXZyyAISQRpZhkHKRlPpNxuOXLYbMUCmoGlhMsmYezwci6ZdBpMpZE6Xvb20xMU1TO1NACQga5NsoOl7872mRiMQqLne+XpIht/Hvf26ZkWoMgJOjqBrZfHXWWk3wpnk0e0cWzvqd2lh7t9xI5k85iZrcJSxg2nVjNTTlvN2sYvEFV099u6viePgJXhqKogUG9t55k6knzljC2d2qH3R3E8veb6eUyS2tpIqpDW95kjmSLDeeU8SmLTF2gxYiku9tW6IN/ruge4VTUf2pHcW4QH0L+c2KgiUU0sABoALeE9L2F4FTt68pWrAdT1lunxPGXHbwP64wh61TpPVfj8pQLSpdJKW77PbbagwIN0J768D18Z1GjVDKGU3DAEeBnEsovpp0/KdJ7C4/PQKH3kJ/pO76yKipTERIQREQIB9puNGWlRHMufAaD6znVCl3mY7tLD7x/KSDtVtD2+JqMfdp9xfBSR6kzQ4mvYFt3TlblIWjC2piCSEB7x0vyHhPMQQqKi+6LZup5eMpwyG5qHwUePEy9Sohzc+6NT1Mxyvyy1Oo1xnxx3915RGRTUYfhHXcJj1XIS173a9+ZvrMnEvmew3L/uP5CWaaZmX7o3eUtjj8q9D8F+Fvky56iadjdjt7G+RQGYgPc3bg1wNbA33yQbaCUKQosqnOe6R+7xvrrpMDshiqP/TFFd1YMTVIO5iSRlvoBa26YdbZr4hyVZzVU6M7HIU1sFUC1za5Mpnr5aZ+af8AtZlxJUsw2qgjkJdqMqKWLWt8xMLZGKd01plWQlWXhdeXQ8JZ2pWDo/dQGxK5j3OW475WThhlbvTBxuNqMRiLWpKCCoIBe2tt27y4SH46vchVJyLfKCSQL6m17zMfaL5CKjk90qKagBL7szEC9ugmpLTXx43e6r5sMsNY5d3n+lGXWWMdUNsqnvOco6DiZlqvhMPDd92qHcO4ngPeb108ps515KYRQo3AW8hKqA1vPCOsyqSaf2kpCwUEnQDUnw1mFgAWzVW3ue70QbhKNrOTlpDTOdfwjfMukfdUaAaDwGkKstRYSxnzG/AcIxNUqLA/rylFNNAPygZaEG8rCC9xMdf1pLqnlAqIufCVhd2ktIxvLqE+P66QPXSxvJL2GxmXEBb6OpXzGsjzC9xNh2Y0xVH8f0IhLrcREqq9lLboiBwvFe+/+ofmZptq7vWeRIWXn9xfwGXaP+GviPlPYmGH23y7jBT9/wAT8zL2B3jwPyiJ0eD7fRf4v0rf9jPfqeI+snOC/wAVPP5NETn8ns8n8f8ArZMrYv8A9j8Z/wBoka7U/wCWp/6g+ZnkROnLh7/3EVxP1mO8ROlv/kv1/wDjyp7p8DMLZ/8Agr4H5xElwMnl4zPT3R5REIanE/5lPwH5zIp+95xEIU4j3h4zL4REC5T3ekrO+IgecJcpcfKIgX397yE2HZ//ADVP8YiIS63ERKqv/9k=",
        title: "Karen Hurtado",
        subtitle: "Gerente de Cantina la 15",
        bio: "Comentario positivo!",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViHf6ckcdJmVCjk6CzjPgkTm6NeKGZ9eKXQ&usqp=CAU",
        title: "Alejandro García",
        subtitle: "Auxiliar administrativo de 1927",
        bio: "Comentario positivo!",
      },
      {
        img: "https://profile-images.xing.com/images/16c44861c72a62523ed2d42dd472927b-1/fernando-luce%C3%B1o-casta%C3%B1os.256x256.jpg",
        title: "Shelton Escobar",
        subtitle: "Negocios varios",
        bio: "Comentario positivo!",
      },
    ],
  }),
};
</script>

<style></style>